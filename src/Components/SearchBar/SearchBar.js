import "./SearchBar.css";

const SearchBar = ({
  searchBarPlaceHolder,
  searchQuery,
  setSearchQuery,
  onSearchInputChange,
}) => {
  const handleSearchClear = () => {
    setSearchQuery("");
  };
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
        {searchQuery !== "" && (
          <p className="search-bar__delete-button" onClick={handleSearchClear}>
            x
          </p>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
