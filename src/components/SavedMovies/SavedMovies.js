import React from "react";

import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

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
  {
    id: 4,
    title: "В погоне за Бенкси",
    duration: 27,
    imageUrl:
      "https://images.unsplash.com/photo-1648315300731-84a74d0ee272?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  },
];

function SavedMovies() {
  return (
    <>
      <Header />
      <Container>
        <section className="movies app__movies" aria-label="Сохраненные фильмы">
          <SearchForm />
          <MoviesCardList data={savedMovies} />
        </section>
        <Footer />
      </Container>
    </>
  );
}

export default SavedMovies;
