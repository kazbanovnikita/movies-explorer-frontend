import "./HeaderNotVerified.css";
import { Link } from "react-router-dom";

function HeaderNotVerified() {
  return (
    <div className="header_not-verified__container">
      <Link className="header_not-verified__link-reg" to="/signup">
        Регистрация
      </Link>
      <Link className="header_not-verified__link-log" to="/signin">
        Войти
      </Link>
    </div>
  );
}

export default HeaderNotVerified;
