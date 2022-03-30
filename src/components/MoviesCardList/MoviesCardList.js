import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ data, modifier, onSavedPage }) {
  return (
    <ul className={`movies-list movies-page__movies-list ${modifier}`}>
      {data.map((movie) => (
        <MoviesCard
          key={movie.id}
          {...movie}
          onSavedPage={onSavedPage}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;
