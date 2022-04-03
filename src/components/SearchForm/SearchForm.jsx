import React from "react";
import Button from "../Button/Button";

import Icons from "../Icons";
import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search-form app__search-form" name="search-movie">
      <div className="search-form__string">
        <Icons.Search className="search-form__icon" />
        <input
          className="search-form__input"
          placeholder="Фильм"
          type="text"
          required
        ></input>
        <Button
          className="button button_type_search button_type_blue"
          type="submit"
        >
          <Icons.Search />
        </Button>
      </div>
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
