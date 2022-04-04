import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

  function MoviesCardList({ allMovies, onSavedPage, onSaveHandler, onDeleteHandler, savedMovies }) {
  return (
    <ul
      className={`movies-list movies-page__movies-list
      ${onSavedPage ? "movies-page__movie-list_type_save" : ""}`}
    >
      {allMovies &&
        allMovies.map((movie) => (
          <MoviesCard
            key={movie._id || movie.id}
            onSaveHandler={onSaveHandler}
            onDeleteHandler={onDeleteHandler}
            {...movie}
          savedMovies={savedMovies}
          />
        ))}
    </ul>
  );
}

export default MoviesCardList;
