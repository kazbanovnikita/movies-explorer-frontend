import "./Header.css";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HeaderNotVerified from "./HeaderNotVerified/HeaderNotVerified";
import Navigation from "../Navigation/Navigation";
import HeaderVerified from "./HeaderVerified/HeaderVerified";

function Header({ loggedIn }) {
  const pathname = useLocation();
  const headerLogClassName = `${loggedIn ? "header_is-verified" : " "}`

  return (
    <header
      className={`header ${headerLogClassName} ${
        pathname.pathname === "/" ? "header_blue" : "header_black"
      }`}
    >
      <Link className="header__link" to="/">
        <img className="header__logo" src={Logo} alt="Логотип" />
      </Link>
      <Navigation className="header__navigation">
        {loggedIn ? <HeaderVerified /> : <HeaderNotVerified />}
      </Navigation>
    </header>
  );
}

export default Header;
