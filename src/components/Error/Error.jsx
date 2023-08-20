import "./Error.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Error({ setIsErrorPage }) {
  useEffect(() => {
    setIsErrorPage(true);
  }, [setIsErrorPage]);

  return (
    <section className="error">
      <h1 className="error__title">404</h1>
      <p className="error__subtitle">Страница не найдена</p>
      <Link
        className="error__link"
        to="/"
        onClick={() => setIsErrorPage(false)}
      >
        Назад
      </Link>
    </section>
  );
}

export default Error;
