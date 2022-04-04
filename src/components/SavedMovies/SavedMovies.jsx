import React from "react";

import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { mainApi } from "../../utils/MainApi";
import "./SavedMovies.css";

function SavedMovies({ savedMovies, setSavedMovies, onDeleteHandler }) {
  const token = localStorage.getItem("token");

  const deleteMovie = (movieId, likeHandler) => {
    mainApi
      .removeMovie(movieId, token)
      .then(() => {
        likeHandler(false);
        setSavedMovies((state) => state.filter((m) => m._id !== movieId));
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="saved-movies-page">
      <Header />
      <Container>
        <section
          className="movies saved-movies-page__movies"
          aria-label="Сохраненные фильмы"
        >
          <SearchForm />
          {savedMovies && (
            <MoviesCardList
              allMovies={savedMovies}
              onDeleteHandler={deleteMovie}
              onSavedPage={true}
            />
          )}
          {savedMovies.length === 0 && (
            <p className="movies__message">Сохраненных фильмов нет</p>
          )}
        </section>
      </Container>
      <Footer />
    </div>
  );
}

export default SavedMovies;
