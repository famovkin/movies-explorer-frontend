import React, { useState, useContext } from "react";

import Button from "../Button/Button";
import Icons from "../Icons";
import savedPageContext from "../../context/saved-page-context";
import { getCorrectDuration } from "../../utils/getCorrectDuration";
import "./MoviesCard.css";

function MoviesCard(props) {
  const { onSavedPage } = useContext(savedPageContext);
  const [isSaved, setIsSaved] = useState(false);
  const SERVER_URL = "https://api.nomoreparties.co/";

  const handleSave = () => setIsSaved(!isSaved);
  const handleDelete = () => console.log("Удаление карточки");

  return (
    <li className="movies-card">
      <div className="movies-card__header">
        <h2 className="movies-card__title">{props.nameRU}</h2>
        <p className="movies-card__duration">
          {getCorrectDuration(props.duration)}
        </p>
      </div>
      <a
        className="movies-card__link"
        href={props.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movies-card__image"
          src={onSavedPage ? props.image : SERVER_URL + props.image.url}
          alt={props.nameRU}
        />
      </a>

      <div className="movies-card__footer">
        <Button
          className={`button_type_card ${
            isSaved && !onSavedPage ? "button_type_red" : "button_type_gray"
          }`}
          handler={!onSavedPage ? handleSave : handleDelete}
        >
          {onSavedPage
            ? (<Icons.Delete />)
            : (isSaved
              ? (<Icons.Like />)
              : "Сохранить")}
        </Button>
      </div>
    </li>
  );
}

export default MoviesCard;
