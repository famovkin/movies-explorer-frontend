import React, { useContext, useEffect, useState } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";
import Button from "../Button/Button";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import savedPageContext from "../../context/saved-page-context";
import Preloader from "../Preloader/Preloader";

import "./Movies.css";

function Movies() {
  const { onSavedPage, setOnSavedPage } = useContext(savedPageContext);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => setOnSavedPage(false), [setOnSavedPage]);

  return (
    <div className="movies-page">
      <Header />
      <Container>
        <section className="movies movies-page__movies" aria-label="Фильмы">
          <SearchForm
            setMovies={setMovies}
            setIsLoading={setIsLoading}
          />
          {isLoading ? <Preloader /> : <MoviesCardList data={movies} />}
          {!isLoading && movies && (
            <p className="movies__message">Ничего не найдено</p>
          )}
          {/* <div className="movies__footer">
            <Button className="button_type_more">Ещё</Button>
          </div> */}
        </section>
      </Container>
      <Footer />
    </div>
  );
}

export default Movies;
