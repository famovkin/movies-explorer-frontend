import React, { useEffect, useState } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";
import Button from "../Button/Button";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import { findOnlyShortMovies, filterMovies } from "../../utils/filters";
import { beatFilmApi } from "../../utils/MoviesApi";
import { getOneIdByAnother } from "../../utils/getOneIdByAnother";
import { UseGetWidthBrowser } from "../../hooks/UseGetWidthBrowse";
import { mainApi } from "../../utils/MainApi";
import "./Movies.css";

function Movies({ savedMovies, setSavedMovies }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [initialCardsAmount, setInitialCards] = useState(0); // первоначальное кол-во карточек
  const [cardsPage, setCardsPage] = useState(0); // открытые страницы
  const [cardsInBundle, setCardsInBundle] = useState(0); // карточек в след. порции
  const [shortFilmsCheck, setShortFilmsCheck] = useState(false);
  const [lastSearchQuery, setLastSearchQuery] = useState("");
  const cardsCount = initialCardsAmount + cardsInBundle * cardsPage;
  const width = UseGetWidthBrowser();
  const queryData = localStorage.getItem("queryData");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (width >= 1280) {
      setInitialCards(12);
      setCardsInBundle(3);
    } else if (width > 480 && width < 1280) {
      setInitialCards(8);
      setCardsInBundle(2);
    } else if (width <= 480) {
      setInitialCards(5);
      setCardsInBundle(5);
    }
  }, [width]);

  let filteredMovies = JSON.parse(queryData)?.filteredMovies || [];
  let filteredShortMovies = JSON.parse(queryData)?.filteredShortMovies || [];

  useEffect(() => {
    if (queryData) {
      setLastSearchQuery(JSON.parse(queryData)?.searchQuery);
      setShortFilmsCheck(JSON.parse(queryData)?.isOnlyShortFilms);
    }
  }, [queryData])

  useEffect(() => {
    shortFilmsCheck
      ? setMovies(filteredShortMovies.slice(0, cardsCount))
      : setMovies(filteredMovies.slice(0, cardsCount));
  }, [shortFilmsCheck, cardsCount]);

  const submitHandler = async (isOnlyShortFilms, searchQuery) => {
    try {
      setIsLoading(true);
      const allMovies = await beatFilmApi.getMovies();
      filteredMovies = await filterMovies(searchQuery, allMovies);
      filteredShortMovies = findOnlyShortMovies(filteredMovies);
      const queryData = {
        filteredMovies,
        filteredShortMovies,
        searchQuery,
        isOnlyShortFilms,
      };
      localStorage.setItem("queryData", JSON.stringify(queryData));

      isOnlyShortFilms
        ? setMovies(filteredShortMovies.slice(0, initialCardsAmount))
        : setMovies(filteredMovies.slice(0, initialCardsAmount));

      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  const moreButtonHandler = () => setCardsPage((prev) => prev + 1);

  const MoreButton = () => (
    <Button className="button_type_more" handler={moreButtonHandler}>
      Ещё
    </Button>
  );

  const saveMovie = (movie, likeHandler) => {
    mainApi
      .createMovie(movie, token)
      .then((newMovie) => {
        setSavedMovies([...savedMovies, newMovie]);
        likeHandler(true);
      })
      .catch((e) => console.log(e));
  };

  const deleteMovie = (movieId, likeHandler) => {
    const idInSavedMovies = getOneIdByAnother(movieId, savedMovies)
    mainApi
      .removeMovie(idInSavedMovies, token)
      .then(() => {
        likeHandler(false);
        setSavedMovies((state) => state.filter((m) => m._id !== idInSavedMovies));
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="movies-page">
      <Header />
      <Container>
        <section className="movies movies-page__movies" aria-label="Фильмы">
          <SearchForm
            submitHandler={submitHandler}
            checkbox={shortFilmsCheck}
            setCheckbox={setShortFilmsCheck}
            lastSearchQuery={lastSearchQuery}
          />
          {isLoading
            ? <Preloader />
            : <MoviesCardList
                allMovies={movies}
                savedMovies={savedMovies}
                onSaveHandler={saveMovie}
                onDeleteHandler={deleteMovie}
                onSavedPage={false}
              />}
          {!isLoading && movies.length === 0 && (
            <p className="movies__message">Ничего не найдено</p>
          )}
          <div className="movies__footer">
            {shortFilmsCheck
              ? cardsCount < filteredShortMovies.length &&
                !isLoading && <MoreButton />
              : cardsCount < filteredMovies.length &&
                !isLoading && <MoreButton />}
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
}

export default Movies;
