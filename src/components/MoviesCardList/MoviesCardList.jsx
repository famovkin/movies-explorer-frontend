import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ data, onSavedPage }) {
  return (
    <ul
      className={`movies-list movies-page__movies-list
      ${onSavedPage
        ? "movies-page__movie-list_type_save"
        : ""
      }`}
    >
      {data && data.map((movie) => (
        <MoviesCard key={movie.id} imageUrl={movie.image.url} link={movie.trailerLink} {...movie} />
      ))}
    </ul>
  );
}

export default MoviesCardList;
