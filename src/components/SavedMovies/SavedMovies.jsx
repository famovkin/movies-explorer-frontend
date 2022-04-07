import React, { useState } from "react";

import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { mainApi } from "../../utils/MainApi";
import { findOnlyShortMovies, filterMovies } from "../../utils/filters";
import "./SavedMovies.css";

const SavedMovies = ({
  savedMovies,
  setSavedMovies,
  message,
  cardErrorHandler,
}) => {
  const [shortFilmsCheck, setShortFilmsCheck] = useState(false);
  // создаем дополнительный стейт, который будем отрисовывать
  const [moviesForRender, setMoviesForRender] = useState(savedMovies);
  const token = localStorage.getItem("token");

  const deleteMovie = (movieId, likeHandler) => {
    mainApi
      .removeMovie(movieId, token)
      .then(() => {
        likeHandler(false);
        // при удалении меняем оба состояния, чтобы карточка не отобразилась
        setSavedMovies((state) => state.filter((m) => m._id !== movieId));
        setMoviesForRender((state) => state.filter((m) => m._id !== movieId));
      })
      .catch((e) => e.json())
      .then((e) => {
        if (e?.message) {
          cardErrorHandler(e.message);
        }
      })
      .catch((e) => console.log(e));
  };

  const submitHandler = (isOnlyShortFilms, searchQuery) => {
    const filteredMovies = filterMovies(searchQuery, savedMovies);
    const filteredShortMovies = findOnlyShortMovies(filteredMovies);

    isOnlyShortFilms
      ? setMoviesForRender(filteredShortMovies)
      : setMoviesForRender(filteredMovies);
  };

  return (
    <div className="saved-movies-page">
      <Header />
      <Container>
        <section
          className="movies saved-movies-page__movies"
          aria-label="Сохраненные фильмы"
        >
          <SearchForm
            submitHandler={submitHandler}
            checkbox={shortFilmsCheck}
            setCheckbox={setShortFilmsCheck}
          />
          {moviesForRender && !message && (
            <MoviesCardList
              allMovies={moviesForRender}
              onDeleteHandler={deleteMovie}
              onSavedPage={true}
            />
          )}
          {message && (
            <p className="movies__message movies__message_type_error">
              {message}
            </p>
          )}
          {moviesForRender.length === 0 && !message && (
            <p className="movies__message">{"Ничего не найдено"}</p>
          )}
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default SavedMovies;
