import "./HeaderProfile.css";
import menuDropdownIcon from "../../images/menu-dropdown-icon.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const HeaderProfile = ({ onClickSignin, onClickSignup }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <div className="header__profile">
      <div className="header__profile-signin-signup">
        <button className="header__sign-in" onClick={onClickSignin}>
          Sign In
        </button>
        <p className="header__sign-in-slash">|</p>
        <button className="header__sign-up" onClick={onClickSignup}>
          Sign Up
        </button>
      </div>
      <div className="header__profile-dropdown">
        <button className="header__profile-menu-button" onClick={toggleMenu}>
          Menu
          <img
            className={`header__profile-menu-icon ${menuOpen ? "open" : ""}`}
            src={menuDropdownIcon}
            alt="menu dropdown icon"
          />
        </button>
        <nav className={`header__profile-menu ${menuOpen ? "open" : ""}`}>
          <ul className="header__profile-list">
            <li className="header__profile-list-item">
              <NavLink
                className="header__profile-list-link"
                to="/"
                exact
                activeClassName="active"
              >
                Booster Packs
              </NavLink>
            </li>
            <li className="header__profile-list-item">
              <NavLink
                className="header__profile-list-link"
                to="/all-cards"
                activeClassName="active"
              >
                All Cards
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {/*<p>PROFILE</p> */}
    </div>
  );
};

export default HeaderProfile;
