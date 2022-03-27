import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ data }) {
  return (
    <ul className="movies-list">
      {data.map((movie) => (
        <MoviesCard key={movie.id} {...movie} />
      ))}
    </ul>
  );
}

export default MoviesCardList;
