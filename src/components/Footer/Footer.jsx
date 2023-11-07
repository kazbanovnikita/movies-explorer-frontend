import "./Footer.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__wrapper">
        <p className="footer__year-notion">&copy; 2023</p>
        <Navigation className={"footer__nav"}>
          <ul className="footer__list">
            <li className="footer__item">
              <Link className="footer__link" to="https://practicum.yandex.ru">
                Яндекс.Практикум
              </Link>
            </li>
            <li className="footer__item">
              <Link
                className="footer__link"
                to="https://github.com/kazbanovnikita/movies-explorer-frontend"
              >
                Github
              </Link>
            </li>
          </ul>
        </Navigation>
      </div>
    </footer>
  );
}

export default Footer;
