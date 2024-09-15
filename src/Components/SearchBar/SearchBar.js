import "./SearchBar.css";
import searchBarButton from "../../images/search-bar-button.svg";

const SearchBar = ({ className }) => {
  return (
    <form className="search-bar">
      <div className={className}>
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
      </div>
    </form>
  );
};

export default SearchBar;
