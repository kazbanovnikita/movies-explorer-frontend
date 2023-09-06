import "./SearchForm.css";
import Search from "../../../images/search-img.svg";
import { useEffect, useState } from "react";

function SearchForm({ handleSearhSubmit, saved}) {
  const [value, setValue] = useState("");

  function firstSavedMovieRender(){
    setValue("")
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleSearhSubmit(value);
  }

  useEffect(()=>{
    if(saved){
      firstSavedMovieRender()
    }else {
    setValue(localStorage.getItem('searchQuery'))
    }
  },[])
  return (
    <form
      className="search-form search-form_focused"
      name="search-form"
      onSubmit={handleSubmit}
    >
      <input
        className="search-form__input"
        type="text"
        placeholder="Фильм"
        required
        name="search-form-input"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={ value }
      />
      <button className="search-form__button" type="submit">
        <img className="search-form__img" src={Search} alt="кнопка-поиска" />
      </button>
    </form>
  );
}

export default SearchForm;
