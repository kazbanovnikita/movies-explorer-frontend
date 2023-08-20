import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ saved, onClickShowMore }) {
  return (
    <div className="movies-card-list">
      <ul className="movies-card-list__ul">
        <MoviesCard saved={saved} />
        <MoviesCard saved={saved} />
        <MoviesCard saved={saved} />
        <MoviesCard saved={saved} />
        <MoviesCard saved={saved} />
        <MoviesCard saved={saved} />
        <MoviesCard saved={saved} />
      </ul>
      {!saved && (
        <button className="movies-card-list__button" onClick={onClickShowMore}>
          Ещё
        </button>
      )}
    </div>
  );
}

export default MoviesCardList;
