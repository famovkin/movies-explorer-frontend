import React, { useState, useEffect } from "react";

import Button from "../Button/Button";
import Icons from "../Icons";
import { getCorrectDuration } from "../../utils/getCorrectDuration";
import {
  SERVER_URL,
  UNKNOWN_IMAGE_URL,
  UNKNOWN_TRAILER_URL,
  UNKNOWN_CARD_TEXT,
} from "../../utils/constants";
import "./MoviesCard.css";

function MoviesCard({ onSavedPage, savedMovies, onSaveHandler, onDeleteHandler, ...props }) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (savedMovies.some((movie) => movie.movieId === props.id)) {
      setIsSaved(true);
    }
  }, [savedMovies, props.id])

  const handleSave = () => {
    const movieData = {
      country: props.country || UNKNOWN_CARD_TEXT,
      director: props.director || UNKNOWN_CARD_TEXT,
      duration: props.duration,
      year: props.year || UNKNOWN_CARD_TEXT,
      description: props.description || UNKNOWN_CARD_TEXT,
      image: SERVER_URL + props.image.url || UNKNOWN_IMAGE_URL,
      trailerLink: props.trailerLink || UNKNOWN_TRAILER_URL,
      nameRU: props.nameRU || props.nameEN || UNKNOWN_CARD_TEXT,
      nameEN: props.nameEN || props.nameRU || UNKNOWN_CARD_TEXT,
      thumbnail: SERVER_URL + props.image.formats.thumbnail.url || UNKNOWN_IMAGE_URL,
      movieId: props.id,
    };
  onSaveHandler(movieData, setIsSaved);
  };

  const handleDelete = () => {
    onDeleteHandler(props._id || props.id, setIsSaved);
  };

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
             isSaved && !onSavedPage
              ? "button_type_red"
              : "button_type_gray"
          }`}
          handler={onSavedPage
            ? handleDelete
            : isSaved
              ? handleDelete
              : handleSave}
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
