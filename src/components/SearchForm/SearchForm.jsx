import React, { useEffect, useState } from "react";

import Button from "../Button/Button";
import { UseCustomValidation } from "../../hooks/UseCustomValidation";
import { UseCheckFormValidity } from "../../hooks/UseCheckFormValidity";
import { countInputs } from "../../utils/countInputs";
import Icons from "../Icons";
import "./SearchForm.css";

function SearchForm({ submitHandler, checkbox, setCheckbox, lastSearchQuery }) {
  const [errorText, setErrorText] = useState("");
  const {
    values,
    errors,
    setValues,
    handleChange,
    isFormValid,
    setIsFormValid,
  } = UseCustomValidation();
  const amountInputs = countInputs(".search-form__input");

  UseCheckFormValidity(values, errors, amountInputs, setIsFormValid);

  useEffect(() => {
    if (lastSearchQuery) {
      setValues({ ...values, "film-query": lastSearchQuery });
    }
  }, [lastSearchQuery, setValues]);

  const onClickCheckBox = () => setCheckbox(!checkbox);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (values["film-query"] === undefined) {
      setErrorText("Запрос не может быть пустым");
      return;
    }
    if (isFormValid) {
      submitHandler(checkbox, values["film-query"]);
      setErrorText("");
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
          checked={checkbox}
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
