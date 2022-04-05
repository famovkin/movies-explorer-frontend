import React, { useState } from "react";

import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { mainApi } from "../../utils/MainApi";
import { findOnlyShortMovies, filterMovies } from "../../utils/filters";
import "./SavedMovies.css";

function SavedMovies({ savedMovies, setSavedMovies, message }) {
  const [shortFilmsCheck, setShortFilmsCheck] = useState(false);
  const token = localStorage.getItem("token");
  const savedMoviesList = JSON.parse(localStorage.getItem("savedMovies"));

  const deleteMovie = (movieId, likeHandler) => {
    mainApi
      .removeMovie(movieId, token)
      .then(() => {
        likeHandler(false);
        setSavedMovies((state) => state.filter((m) => m._id !== movieId));
      })
      .catch((e) => console.log(e));
  };

  const submitHandler = (isOnlyShortFilms, searchQuery) => {
    const filteredMovies = filterMovies(searchQuery, savedMoviesList);
    const filteredShortMovies = findOnlyShortMovies(filteredMovies);

    isOnlyShortFilms
      ? setSavedMovies(filteredShortMovies)
      : setSavedMovies(filteredMovies);
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
          {savedMovies && !message && (
            <MoviesCardList
              allMovies={savedMovies}
              onDeleteHandler={deleteMovie}
              onSavedPage={true}
            />
          )}
          {message && <p className="movies__message movies__message_type_error">{message}</p>}
          {savedMovies.length === 0 && !message && (
            <p className="movies__message">{"Ничего не найдено"}</p>
          )}
        </section>
      </Container>
      <Footer />
    </div>
  );
}

export default SavedMovies;
