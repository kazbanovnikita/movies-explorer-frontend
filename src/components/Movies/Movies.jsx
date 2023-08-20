import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import "./Movies.css";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

function Movies() {
  return (
    <main className="movies">
      <div className="movies__form-container">
        <SearchForm />
        <FilterCheckbox />
      </div>
      <MoviesCardList saved={false} onClickShowMore={() => {}} />
    </main>
  );
}

export default Movies;
