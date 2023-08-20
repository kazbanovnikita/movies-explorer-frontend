import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter">
      <label className="filter__label" htmlFor="checkbox">
        Короткометражки
        <input className="filter__checkbox" type="checkbox" id="checkbox" />
        <span className="filter__checkbox_visible"></span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
