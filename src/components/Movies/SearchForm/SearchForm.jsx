import "./SearchForm.css";
import Search from "../../../images/search-img.svg";

function SearchForm() {
  return (
    <form
      className="search-form"
      name="search-form"
      noValidate
      onSubmit={() => {}}
    >
      <input
        className="search-form__input"
        type="text"
        placeholder="Фильм"
        required
        name="search-form-input"
      />
      <button className="search-form__button" type="submit">
        <img className="search-form__img" src={Search} alt="кнопка-поиска" />
      </button>
    </form>
  );
}

export default SearchForm;
