import React from "react";

import Button from "../Button/Button";
// import Icons from "../Icons";
import sample from "../../images/sample.jpg";
import "./MoviesCard.css";

function MoviesCard() {
  return (
    <li className="movies-card">
      <div className="movies-card__header">
        <h2 className="movies-card__title">В погоне за Бенкси</h2>
        <p className="movies-card__duration">30 минут</p>
      </div>
      <img className="movies-card__image" src={sample} alt="Постер" />
      <div className="movies-card__footer">
        <Button className="button_type_card button_type_gray">Сохранить</Button>
      </div>
    </li>
  );
}

export default MoviesCard;
