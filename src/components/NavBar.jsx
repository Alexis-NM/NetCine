import { Link } from "react-router-dom";
import "./NavBar.scss";
import { useState } from "react";
import Logo from "../assets/LOGO.png";

function NavBar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
      <Link className="home-link" to="/home">
        <img className="logo" src={Logo} alt="logo" />
      </Link>
      <ul className="navbar_links">
        <li className="navbar_item slideInDown-1">
          <Link className="navbar_link" to="/home">
            Accueil
          </Link>
        </li>
        <li className="navbar_item slideInDown-2">
          <Link className="navbar_link" to="/movies">
            Films
          </Link>
        </li>
        <li className="navbar_item slideInDown-3">
          <Link className="navbar_link" to="/series">
            Séries
          </Link>
        </li>
        <li className="navbar_item slideInDown-4">
          <Link className="navbar_link" to="/favorites">
            Favoris
          </Link>
        </li>
      </ul>
      <button
        className="navbar_burger"
        type="button"
        onClick={handleShowLinks}
        aria-label={showLinks ? "Close Burger" : "Open Burger"}
      >
        <div className="burger-bar" />
      </button>
    </nav>
  );
}

export default NavBar;
