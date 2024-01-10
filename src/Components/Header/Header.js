import "./Header.css";
import yugiohLogo from "../../images/yu-gi-oh-booster-sim-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__nav">
          <div className="header__search-bar">
            <form className="search-bar__form">
              <input
                className="search-bar__input"
                type="text"
                placeholder="Search..."
              />
              <button className="search-bar__button" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="header__profile">
            <button className="header__sign-in">Sign In / Sign up</button>
            {/*<p>PROFILE</p> */}
          </div>
        </div>
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
