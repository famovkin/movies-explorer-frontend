import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ data, onSavedPage, onSaveHandler }) {
  return (
    <ul
      className={`movies-list movies-page__movies-list
      ${onSavedPage
        ? "movies-page__movie-list_type_save"
        : ""
      }`}
    >
      {data && data.map((movie) => (
        <MoviesCard key={movie._id || movie.id} onSaveHandler={onSaveHandler} {...movie} />
      ))}
    </ul>
  );
}

export default MoviesCardList;
