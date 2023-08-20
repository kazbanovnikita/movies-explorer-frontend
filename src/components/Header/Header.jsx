import "./Header.css";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import HeaderNotVerified from "./HeaderNotVerified/HeaderNotVerified";
import Navigation from "../Navigation/Navigation";
import HeaderVerified from "./HeaderVerified/HeaderVerified";

function Header({ loggedIn }) {
  return (
    <section
      className={`header ${
        loggedIn ? "header_verified" : "header_not-verified"
      } `}
    >
      <Link className="header__link" to="/">
        <img className="header__logo" src={Logo} alt="Логотип" />
      </Link>
      <Navigation className="header__navigation">
        {loggedIn ? <HeaderVerified /> : <HeaderNotVerified />}
      </Navigation>
    </section>
  );
}

export default Header;
