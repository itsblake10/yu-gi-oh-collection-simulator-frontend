import "./Header.css";
import yugiohLogo from "../../images/yu-gi-oh-booster-sim-logo.png";
import HeaderNav from "../HeaderNav/HeaderNav";
import { NavLink } from "react-router-dom";
import React from "react";
import { IsLoggedInContext } from "../contexts/isLoggedInContext";
import HeaderProfile from "../HeaderProfile/HeaderProfile";

const Header = ({ onClickSignin, onClickSignup }) => {
  const { isLoggedIn } = React.useContext(IsLoggedInContext);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__nav">
          {!isLoggedIn ? (
            <HeaderNav
              onClickSignin={onClickSignin}
              onClickSignup={onClickSignup}
            />
          ) : (
            <HeaderProfile />
          )}
        </div>
        <NavLink className="header__logo_link" to="/">
          <img
            className="header__logo"
            src={yugiohLogo}
            alt="Yu-Gi-Oh Booster Pack Simulator Logo"
          />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
