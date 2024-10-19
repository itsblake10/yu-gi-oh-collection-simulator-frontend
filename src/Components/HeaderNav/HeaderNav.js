import "./HeaderNav.css";
import menuDropdownIcon from "../../images/menu-dropdown-icon.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const HeaderNav = ({ onClickSignin, onClickSignup }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const AutoCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="header__nav-right">
      <div className="header__nav-signin-signup">
        <button className="header__sign-in" onClick={onClickSignin}>
          Sign In
        </button>
        <p className="header__nav-slash">|</p>
        <button className="header__sign-up" onClick={onClickSignup}>
          Sign Up
        </button>
      </div>
      <div
        className="header__nav-dropdown"
        onMouseEnter={toggleMenu}
        onMouseLeave={AutoCloseMenu}
      >
        <button className="header__nav-menu-button">
          Menu
          <img
            className={`header__nav-menu-icon ${menuOpen ? "open" : ""}`}
            src={menuDropdownIcon}
            alt="menu dropdown icon"
          />
        </button>
        <nav className={`header__nav-menu ${menuOpen ? "open" : ""}`}>
          <ul className="header__nav-list">
            <li className="header__nav-list-item">
              <NavLink
                className="header__nav-list-link"
                to="/"
                exact
                activeClassName="active"
              >
                Booster Packs
              </NavLink>
            </li>
            <li className="header__nav-list-item">
              <NavLink
                className="header__nav-list-link"
                to="/all-cards"
                activeClassName="active"
              >
                All Cards
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderNav;
