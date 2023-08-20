import "./SavedMovies.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <main className="saved-movies">
      <div className="saved-movies__form-container">
        <SearchForm />
        <FilterCheckbox />
      </div>
      <MoviesCardList saved={true} onClickShowMore={() => {}} />
    </main>
  );
}

export default SavedMovies;
