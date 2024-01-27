import "./Header.css";
import yugiohLogo from "../../images/yu-gi-oh-booster-sim-logo.png";
import SearchBar from "../SearchBar/SearchBar";
import HeaderProfile from "../HeaderProfile/HeaderProfile";
import { Link } from "react-router-dom";

const Header = ({ onClickSigninSignup }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__nav">
          <SearchBar />
          <HeaderProfile onClickSigninSignup={onClickSigninSignup} />
        </div>
        <Link className="header__logo_link" to="/">
          <img
            className="header__logo"
            src={yugiohLogo}
            alt="Yu-Gi-Oh Booster Pack Simulator Logo"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
