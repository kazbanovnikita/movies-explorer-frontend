import "./HeaderVerified.css";
import Icon from "../../../images/user-icon.svg";
import { useState } from "react";
import Navigation from "../../Navigation/Navigation";
import { Link, useLocation } from "react-router-dom";
function HeaderVerified() {
  const location = useLocation();
  const path = location.pathname;

  const [isburgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isburgerMenuOpen);
    console.log(isburgerMenuOpen);
  };
  return (
    <div className="header_verified">
      {!isburgerMenuOpen ? (
        <button
          className="header_verified__button"
          type="button"
          onClick={toggleBurgerMenu}
        />
      ) : (
        <div className="header_verified__background">
          <div className="header_verified__burger">
            <button
              className="header_verified__close-button"
              type="button"
              onClick={toggleBurgerMenu}
            />
            <Navigation>
              <ul className="header_verified__list">
                <li className="header_verified__item">
                  <Link
                    className={`header_verified__link ${
                      path === "/" && "header_verified__link_active"
                    }`}
                    to="/"
                  >
                    Главная
                  </Link>
                </li>
                <li className="header_verified__item">
                  <Link
                    className={`header_verified__link ${
                      path === "/movies" && "header_verified__link_active"
                    }`}
                    to="/movies"
                  >
                    Фильмы
                  </Link>
                </li>
                <li className="header_verified__item">
                  <Link
                    className={`header_verified__link ${
                      path === "/saved-movies" && "header_verified__link_active"
                    }`}
                    to="/saved-movies"
                  >
                    Сохранённые фильмы
                  </Link>
                </li>
              </ul>
            </Navigation>
            <Link className="header_verified__profile-link" to="/profile">
              Аккаунт
              <div className="header_verified__icon-wrapper">
                <img
                  className="header_verified__profile-icon"
                  src={Icon}
                  alt="иконка пользователя"
                />
              </div>
            </Link>
          </div>
        </div>
      )}
      {
        <div className="header_verified__wrapper">
          <Navigation className="header_verified__link-wrapper">
            <Link className="header_verified__link" to="/movies">
              Фильмы
            </Link>
            <Link className="header_verified__link" to="/saved-movies">
              Сохранённые фильмы
            </Link>
          </Navigation>
          <Link className="header_verified__profile-link" to="/profile">
            Аккаунт
            <div className="header_verified__icon-wrapper">
              <img
                className="header_verified__profile-icon"
                src={Icon}
                alt="иконка пользователя"
              />
            </div>
          </Link>
        </div>
      }
    </div>
  );
}

export default HeaderVerified;
