import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { useCustomValidation } from "../../hooks/useCustomValidation";
import { beatFilmApi } from "../../utils/MoviesApi";

import Icons from "../Icons";
import "./SearchForm.css";

function SearchForm({ setMovies, setIsLoading, onSavedPage }) {
  const [errorText, setErrorText] = useState("");
  const { values, setValues, errors, handleChange, isFormValid } =
    useCustomValidation();
  const dataFromStorage = localStorage.getItem("queryData");

  useEffect(() => {
    if (dataFromStorage && onSavedPage) {
      const query = JSON.parse(dataFromStorage).searchQuery;
      setValues({ ...values, ["film-query"]: query });
    }
  }, [dataFromStorage, setValues, onSavedPage, values]);

  const filterMovies = async (searchQuery) => {
    setIsLoading(true);
    const movies = await beatFilmApi
      .getMovies()
      .then((data) => data)
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));

    const filteredMovies = movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setMovies(filteredMovies);

    const queryData = {
      searchQuery,
      filteredMovies,
    };
    localStorage.setItem("queryData", JSON.stringify(queryData));
  };

  const handleSubmitFrom = (e) => {
    e.preventDefault();
    if (values["film-query"] === undefined) {
      setErrorText("Запрос не может быть пустым");
      return;
    }
    if (isFormValid) {
      console.log("Запрос на сервер");
      filterMovies(values["film-query"]);
    }
    setErrorText(errors["film-query"]);
  };

  return (
    <form
      className="search-form app__search-form"
      name="search-movie"
      onSubmit={handleSubmitFrom}
      noValidate
    >
      <div className="search-form__string">
        <Icons.Search className="search-form__icon" />
        <input
          className="search-form__input"
          name="film-query"
          placeholder="Фильм"
          type="text"
          required
          onChange={handleChange}
          value={values["film-query"] || ""}
        />
        <Button
          className="button button_type_search button_type_blue"
          type="submit"
        >
          <Icons.Search />
        </Button>
      </div>
      <span className="search-form__error">{errorText}</span>
      <label className="search-form__label" htmlFor="short-film">
        <input
          className="search-form__radio"
          type="checkbox"
          name="short-film-option"
          id="short-film"
          value="short-film"
        />
        <div className="search-form__pseudo-item">
          <span className="search-form__circle"></span>
        </div>
        <span className="search-form__label-text">Короткометражки</span>
      </label>
    </form>
  );
}

export default SearchForm;
