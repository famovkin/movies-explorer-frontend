import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";
import Icons from "../Icons";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./Movies.css";
import Button from "../Button/Button";

function Movies() {
  return (
    <>
      <Header />
      <Container>
        <section className="movies app__movies" aria-label="Фильмы">
          <form className="search-form app__search-form">
            <div className="search-form__string">
              <Icons.Search className="search-form__icon" />
              <input
                className="search-form__input"
                placeholder="Фильм"
                required
              ></input>
              <button className="button button_type_search button_type_blue">
                <Icons.Search />
              </button>
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
          <ul className="movies-list">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
          </ul>
          <div className="movies__footer">
            <Button className="button_type_more">Ещё</Button>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Movies;
