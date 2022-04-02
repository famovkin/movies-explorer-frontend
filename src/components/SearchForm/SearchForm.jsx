import React, { useState } from "react";
import Button from "../Button/Button";
import { useCustomValidation } from "../../hooks/useCustomValidation";

import Icons from "../Icons";
import "./SearchForm.css";

function SearchForm({ checkboxHandler, submitHandler }) {
  const [errorText, setErrorText] = useState("");
  const [shortFilmsCheck, setShortFilmsCheck] = useState(false);
  const { values, setValues, errors, handleChange, isFormValid } =
    useCustomValidation();

  const onClickCheckBox = () => {
    setShortFilmsCheck(!shortFilmsCheck);
    checkboxHandler(shortFilmsCheck);
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (values["film-query"] === undefined) {
      setErrorText("Запрос не может быть пустым");
      return;
    }
    if (isFormValid) {
      submitHandler(shortFilmsCheck, values["film-query"]);
    }
    setErrorText(errors["film-query"]);
  };

  return (
    <form
      className="search-form app__search-form"
      name="search-movie"
      onSubmit={onSubmitForm}
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
          autoComplete="off"
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
          checked={shortFilmsCheck}
          onChange={onClickCheckBox}
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
