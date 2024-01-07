import "./Header.css";
import yugiohLogo from "../../images/yu-gi-oh-booster-sim-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img
          className="header__logo"
          src={yugiohLogo}
          alt="Yu-Gi-Oh Booster Pack Simulator Logo"
        />
      </div>
    </header>
  );
};

export default Header;
