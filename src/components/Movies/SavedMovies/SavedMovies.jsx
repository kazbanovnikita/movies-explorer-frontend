import "./SavedMovies.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import { getFilteredMovies, filterShortMovies } from "../../../utils/constants";
import Preloader from "../../Preloader/Preloader";

function SavedMovies({ movies, onDelete }) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [shortFilms, setShortFilms] = useState(
    JSON.parse(localStorage.getItem("savedShortFilms")) || false
  );
  // состояния фильмов
  const [filteredMovies, setFilteredMovies] = useState(
    JSON.parse(localStorage.getItem("saved")) || []
  );
  const [error, setError] = useState();

  function handleSearchSubmit(value) {
    if (value < 1) {
      setError("Нужно ввести ключевое слово");
    } else {
      setError("");
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      setSearchQuery(value);
      const resultList = getFilteredMovies(movies, searchQuery);
      setFilteredMovies(resultList);
    }
  }

  function handleSearchShorts(e) {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setShortFilms(e.target.checked);
    console.log(e.target.checked);
    localStorage.setItem("savedShortFilms", e.target.checked);
    console.log(JSON.parse(localStorage.getItem("savedShortFilms")));
  }

  useEffect(() => {
    if (shortFilms) {
      const arr = filterShortMovies(
        searchQuery !== "" ? getFilteredMovies(movies, searchQuery) : movies
      );
      localStorage.setItem("saved", JSON.stringify(arr));
      setFilteredMovies(arr);
    } else {
      const a = getFilteredMovies(movies, searchQuery);
      localStorage.setItem("saved", JSON.stringify(a));
      setFilteredMovies(a);
    }
  }, [searchQuery, shortFilms, onDelete]);

  useEffect(() => {
    localStorage.setItem("savedShortFilms", false);
    setShortFilms(false);
    setSearchQuery("");
  }, []);

  function savedMoivesForRender() {
    return searchQuery === "" && shortFilms === false ? movies : filteredMovies;
  }

  return (
    <main className="saved-movies">
      <div className="saved-movies__form-container">
        <SearchForm handleSearhSubmit={handleSearchSubmit} saved={true} />
        {window.innerWidth < 1024 ? (
          <div className="movies__search-error">{error}</div>
        ) : (
          ""
        )}
        <FilterCheckbox
          onShortsCheck={handleSearchShorts}
          showShorts={shortFilms}
        />
        {window.innerWidth > 1024 ? (
          <div className="movies__search-error">{error}</div>
        ) : (
          ""
        )}
      </div>{" "}
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          saved={true}
          movies={savedMoivesForRender()}
          savedMovie={filteredMovies}
          onDelete={onDelete}
        />
      )}
    </main>
  );
}

export default SavedMovies;
