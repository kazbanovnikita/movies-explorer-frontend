import "./FilterCheckbox.css";

function FilterCheckbox({ onShortsCheck, showShorts }) {
  return (
    <div className="filter">
      <label className="filter__label" htmlFor="checkbox">
        Короткометражки
        <input className="filter__checkbox" type="checkbox" id="checkbox" onChange={onShortsCheck} checked={showShorts}/>
        <span className="filter__checkbox_visible"></span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
