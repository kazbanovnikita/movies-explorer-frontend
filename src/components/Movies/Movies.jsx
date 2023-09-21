import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import "./Movies.css";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import useWidth from "../../utils/hooks/useCurrentWidth";
import { useState, useEffect } from "react";
import { getFilteredMovies, filterShortMovies } from "../../utils/constants";
import apiMovie from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";

function Movies({ onLike, savedMovies}) {
  const [isLoading, setIsLoading] = useState(false)
  const [searchRequest, setSearchRequest] = useState(
    localStorage.getItem("searchQuery") || ""
  );
  const [filteredMovies, setFilteredMovies] = useState(
    JSON.parse(localStorage.getItem("movies")) || []
  );
  const [shortFilms, setShortFilms] = useState(
    JSON.parse(localStorage.getItem("shortFilms")) || false
  );
  const [allMovie, setAllMovie] = useState(
    JSON.parse(localStorage.getItem("allMovies")) || []
  );

  const [error, setError] = useState()

  const [firstVisit, setFirstVist] = useState(true)

  const { initialCardsNumber, cardsPerLine } = useWidth();
  const [shownMoviesNumber, setShownMoviesNumber] =
    useState(initialCardsNumber);
  const moreButtonVisible = filteredMovies.length > shownMoviesNumber;

  const handleButtonClick = (evt) => {
    evt.preventDefault();
    setShownMoviesNumber(shownMoviesNumber + cardsPerLine);
  };

  function handleSetFilteredMovies(allMovie, query, checkbox) {
    getAllMovies();
    const moviesList = getFilteredMovies(allMovie, query);
    setFilteredMovies(
      checkbox === true ? filterShortMovies(moviesList) : moviesList
    );
    localStorage.setItem("movies", JSON.stringify(moviesList));
  }

  

  function handleSearhSubmit(value) {
    if(value < 1){
      setError('Нужно ввести ключевое слово')
    } else {
    setError('')
    setFirstVist(false)
    
    setSearchRequest(value);
    localStorage.setItem("searchQuery", value);
    handleSetFilteredMovies(allMovie, value, shortFilms);
    }
  }

  const handleSearchShorts = (e) => {
    setIsLoading(true)
    setTimeout(()=>{
      
      setIsLoading(false)
    }, 1000)
    setShortFilms(e.target.checked);
    localStorage.setItem("shortFilms", e.target.checked);
  };

  function getAllMovies() {
    setIsLoading(true)
    apiMovie
      .getMovies()
      .then((movie) => {
        console.log(movie)
        setAllMovie(movie);
        localStorage.setItem("allMovies", JSON.stringify(movie));
      })
      .catch((err) => console.log(err))
      .finally((() => setIsLoading(false)))
  }

  useEffect(() => {
    setShownMoviesNumber(initialCardsNumber);
  }, [initialCardsNumber]);

  function filter() {
    return !shortFilms
      ? getFilteredMovies(allMovie, searchRequest)
      : filterShortMovies(getFilteredMovies(allMovie, searchRequest));
  }

  //////////////////
/*
  useEffect(() => {
    getAllMovies();
  }, []);
*/
  useEffect(() => {
    if (shortFilms) {
      const arr = filterShortMovies(getFilteredMovies(allMovie, searchRequest));
      setFilteredMovies(arr);
    } else {
      const a = getFilteredMovies(allMovie, searchRequest);
      setFilteredMovies(a);
    }
    setShownMoviesNumber(initialCardsNumber)
  }, [searchRequest, shortFilms]);

  return (
    <main className="movies">
      <div className="movies__form-container">
        <SearchForm handleSearhSubmit={handleSearhSubmit} />
        {window.innerWidth < 1024 ? (<div className="movies__search-error">{error}</div>) : ""}
        <FilterCheckbox
          onShortsCheck={handleSearchShorts}
          showShorts={shortFilms}
        />
      </div>
      {window.innerWidth > 1024 ? (<div className="movies__search-error">{error}</div>) : ""} 
      {isLoading ? (<Preloader />) : (
      <MoviesCardList
        onLike={onLike}
        saved={false}
        onClickShowMore={handleButtonClick}
        movies={filter().slice(0, shownMoviesNumber)}
        buttonVisible={moreButtonVisible}
        savedMovies={savedMovies}
        firstVisit={firstVisit}
      />
      )}
    </main>
  );
}

export default Movies;
