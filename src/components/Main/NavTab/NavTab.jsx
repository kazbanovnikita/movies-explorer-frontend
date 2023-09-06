import "./NavTab.css";
import Navigation from "../../Navigation/Navigation";

function NavTab() {
  return (
    <Navigation>
      <ul className="navTab__list">
        <li className="navTab__item">
          <a className="navTab__link" href="#about-project" >О Проекте</a>
        </li>
        <li className="navTab__item">
          <a className="navTab__link" href="#techs">Технологии</a>
        </li>
        <li className="navTab__item">
          <a className="navTab__link" href="#about-me">Студент</a>
        </li>
      </ul>
    </Navigation>
  );
}

export default NavTab;
