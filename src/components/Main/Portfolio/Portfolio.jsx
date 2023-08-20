import "./Portfolio.css";
import Navigation from "../../Navigation/Navigation";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__description">Портфолио</h2>
      <Navigation className="portfolio__nav">
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <Link
              className="portfolio__link"
              to="https://kazbanovnikita.github.io/how-to-learn/"
              target="_blank"
            >
              <p className="portfolio__link-text">Статичный сайт</p>
              <p className="portfolio__link-arrow">↗</p>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link
              className="portfolio__link"
              to="https://kazbanovnikita.github.io/russian-travel/"
              target="_blank"
            >
              <p className="portfolio__link-text">Адаптивный сайт</p>
              <p className="portfolio__link-arrow">↗</p>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link
              className="portfolio__link"
              to="https://nik24-mesto.nomoredomains.work/sign-in"
              target="_blank"
            >
              <p className="portfolio__link-text">Одностраничное приложение</p>
              <p className="portfolio__link-arrow">↗</p>
            </Link>
          </li>
        </ul>
      </Navigation>
    </section>
  );
}

export default Portfolio;
