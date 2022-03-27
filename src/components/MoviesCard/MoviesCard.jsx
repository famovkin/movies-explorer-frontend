import React from "react";

import Button from "../Button/Button";
import "./MoviesCard.css";

function MoviesCard({ title, duration, imageUrl }) {
  return (
    <li className="movies-card">
      <div className="movies-card__header">
        <h2 className="movies-card__title">{title}</h2>
        <p className="movies-card__duration">{duration} минут</p>
      </div>
      <img className="movies-card__image" src={imageUrl} alt="Постер" />
      <div className="movies-card__footer">
        <Button className="button_type_card button_type_gray">Сохранить</Button>
      </div>
    </li>
  );
}

export default MoviesCard;
