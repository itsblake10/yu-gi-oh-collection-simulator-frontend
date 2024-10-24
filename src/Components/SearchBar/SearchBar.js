import "./SearchBar.css";
import searchBarButton from "../../images/search-bar-button.svg";

const SearchBar = ({
  searchBarPlaceHolder,
  searchQuery,
  onSearchInputChange,
}) => {
  return (
    <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
      <div className="search-bar__container">
        <input
          className="search-bar__input"
          type="text"
          value={searchQuery}
          onChange={onSearchInputChange}
          placeholder={searchBarPlaceHolder}
        />
        {searchBarPlaceHolder !== "Search Booster Packs..." &&
          searchBarPlaceHolder !== "Search Cards..." && (
            <button className="search-bar__button" type="submit">
              <img
                className="search-bar__button-image"
                src={searchBarButton}
                alt="search bar button"
              />
            </button>
          )}
      </div>
    </form>
  );
};

export default SearchBar;
