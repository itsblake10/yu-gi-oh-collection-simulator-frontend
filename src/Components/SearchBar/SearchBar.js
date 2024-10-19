import "./SearchBar.css";
import searchBarButton from "../../images/search-bar-button.svg";

const SearchBar = ({ searchBarPlaceHolder }) => {
  return (
    <form className="search-bar">
      <div className="search-bar__container">
        <input
          className="search-bar__input"
          type="text"
          placeholder={searchBarPlaceHolder}
        />
        <button className="search-bar__button" type="submit">
          <img
            className="search-bar__button-image"
            src={searchBarButton}
            alt="search bar button"
          />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
