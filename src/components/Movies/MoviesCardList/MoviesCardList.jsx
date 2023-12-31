import { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({
  movies,
  saved,
  onClickShowMore,
  buttonVisible,
  onLike, 
  onDelete,
  savedMovies,
  firstVisit
}) 
{
  const text =  !firstVisit ?  "Ничего не найдено" : "Вы пока ничего не искали"

 

  console.log(movies)
  return (
    <div className="movies-card-list">
      { movies.length  !== 0 ?
        (<ul className="movies-card-list__ul">
          {movies.map((movie) => {
            return <MoviesCard key={movie.id ?? movie._id} movie={movie} onLike={onLike} onDelete={onDelete} saved={saved} savedMovies={savedMovies}/>;
          })}
        </ul>) : (<span className="movies-card-list__not-found">{text}</span>)
}
      {!saved && buttonVisible &&(
          <button
            className="movies-card-list__button"
            onClick={onClickShowMore}
          >
            Ещё
          </button>
        )}
    </div>
  );
}

export default MoviesCardList;
