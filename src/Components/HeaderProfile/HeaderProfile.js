import "./HeaderProfile.css";
import menuDropdownIcon from "../../images/menu-dropdown-icon.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import blueEyesWhiteDragon from "../../images/LOB-cards/blueEyesWhiteDragon-LOB.png";

const HeaderProfile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <div className="header__profile">
      <p className="header__profile-username">username123xdfdsfsd</p>
      <div className="header__profile-image-container">
        <img className="header__profile-image" src={blueEyesWhiteDragon} />
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
            <li className="header__profile-list-item">
              <NavLink
                className="header__profile-list-link"
                to="/profile-account"
                activeClassName="active"
              >
                Profile/Account
              </NavLink>
            </li>
            <li className="header__profile-list-item">
              <button className="header__profile-list-button">Log Out</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderProfile;
