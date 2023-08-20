import "./NavTab.css";
import Navigation from "../../Navigation/Navigation";
import { Link } from "react-router-dom";

function NavTab() {
  return (
    <Navigation>
      <ul className="navTab__list">
        <li className="navTab__item">
          <Link className="navTab__link" to="#about-project" exact >О Проекте</Link>
        </li>
        <li className="navTab__item">
          <Link className="navTab__link" to="#techs">Технологии</Link>
        </li>
        <li className="navTab__item">
          <Link className="navTab__link" to="#about-me">Студент</Link>
        </li>
      </ul>
    </Navigation>
  );
}

export default NavTab;
