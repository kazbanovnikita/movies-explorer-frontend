import "./MoviesCard.css";
import { useState } from "react";

function MoviesCard({ movie, saved, onLike, onDelete, savedMovies }) {


const isLiked = !saved && savedMovies.some((film) => film.movieId === movie.id);

  function handleMovieLike() {
    onLike({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: 'https://api.nomoreparties.co' + movie.image.url,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: 'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url,
      movieId: movie.id,
    });
  }

  function handleMovieDelete(){
    onDelete(movie)
  }

  const movieSaveButtonClassName = `movies-card__save-button ${
    isLiked ? "movies-card__save-button_liked" : " "
  }`;

  function getMoviesTime() {
    if (movie.duration < 60) {
      return `${movie.duration % 60}м`;
    } else {
      return `${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`;
    }
  }


  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__info-wrapper">
          <h2 className="movies-card__title">{movie.nameRU}</h2>
          <p className="movies-card__duration">
            {getMoviesTime(movie.duration)}
          </p>
        </div>
        <button
          className={
            saved ? "movies-card__save-button_delete" : movieSaveButtonClassName
          }
          type="button"
          onClick={!saved ? handleMovieLike : handleMovieDelete}
        />
      </div>
      <a
        className="card__link"
        target="_blank"
        rel="noreferrer"
        href={movie.trailerLink}
      >
        <img className="movies-card__img" src={!saved ? `${"https://api.nomoreparties.co"}${movie.image.formats.thumbnail.url}` : movie.image} alt={movie.image.alternativeText}></img>
      </a>
    </li>
  );
}

export default MoviesCard;
