import "./SearchBar.css";
import searchBarButton from "../../images/search-bar-button.svg";

const SearchBar = () => {
  return (
    <form className="search-bar">
      <input
        className="search-bar__input"
        type="text"
        placeholder="Search..."
      />
      <button className="search-bar__button" type="submit">
        <img
          className="search-bar__button-image"
          src={searchBarButton}
          alt="search bar button"
        />
      </button>
    </form>
  );
};

export default SearchBar;
