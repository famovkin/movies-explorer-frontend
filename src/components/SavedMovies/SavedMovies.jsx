import React from "react";

import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

const savedMovies = [
  {
    id: 1,
    title: "В погоне за Бенкси",
    duration: 27,
    imageUrl:
      "https://images.unsplash.com/photo-1648315300731-84a74d0ee272?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "В погоне за Бенкси",
    duration: 27,
    imageUrl:
      "https://images.unsplash.com/photo-1648315300731-84a74d0ee272?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "В погоне за Бенкси",
    duration: 27,
    imageUrl:
      "https://images.unsplash.com/photo-1648315300731-84a74d0ee272?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  },
];

function SavedMovies() {
  return (
    <div className="saved-movies-page">
      <Header />
      <Container>
        <section
          className="movies saved-movies-page__movies"
          aria-label="Сохраненные фильмы"
        >
          <SearchForm />
          <MoviesCardList
            data={savedMovies}
            modifier="movies-page__movies-list_type_saved"
            onSavedPage
          />
        </section>
      </Container>
      <Footer />
    </div>
  );
}

export default SavedMovies;
