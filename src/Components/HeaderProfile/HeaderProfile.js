import "./HeaderProfile.css";
import menuDropdownIcon from "../../images/menu-dropdown-icon.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Armaill from "../../images/temp/Armaill.jpg";

const HeaderProfile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const username = "usernaNAMdfsdf34dsdfsdFF";
  const isLongUsername = username.length > 17;

  return (
    <div className="header__profile">
      <div className="header__profile-username-container">
        <p className="header__profile-username">{username}</p>
        {isLongUsername && (
          <span className="header__profile-username_tooltip">{username}</span>
        )}
      </div>
      <div className="header__profile-image-container">
        <img className="header__profile-image" src={Armaill} alt="profile" />
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
