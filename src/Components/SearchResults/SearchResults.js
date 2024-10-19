import "./SearchResults.css";
import React, { useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import SearchBar from "../SearchBar/SearchBar";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { IsLoadingContext } from "../contexts/IsLoadingContext";

const SearchResults = ({ onClickCard }) => {
  const { isLoading } = React.useContext(IsLoadingContext);
  //   const [sortOrder, setSortOrder] = useState("newest");
  //   const [visibleCards, setVisibleCards] = useState(210);

  //   const handleSortChange = (event) => {
  //     setSortOrder(event.target.value);
  //   };

  //   const sortedCards = [...allCards]
  //     .filter((item) => {
  //
  //     })
  //     .sort((a, b) => {
  //       if (sortOrder === "newest") {
  //         return new Date(b.tcg_date) - new Date(a.tcg_date);
  //       } else {
  //         return new Date(a.tcg_date) - new Date(b.tcg_date);
  //       }
  //     });

  //   const handleViewMore = () => {
  //     setVisibleCards((prevVisibleCards) => prevVisibleCards + 210);
  //   };

  //   const handleViewLess = () => {
  //     setVisibleCards((prevVisibleCards) =>
  //       Math.max(prevVisibleCards - 210, 210)
  //     );
  //   };

  //   const visibleItems = allCards.slice(0, visibleCards);

  return (
    <main className="search-results__page">
      <h1 className="search-results__title">Search Results</h1>
      <div className="search-results__container">
        <div className="search-results__search-bar">
          <SearchBar searchBarPlaceHolder={"Search..."} />
          {/* <select
            className="all-cards__filter"
            // value={sortOrder}
            // onChange={handleSortChange}
          >
            <option className="all-cards__option" value="newest">
              Newest Release
            </option>
            <option className="all-cards__option" value="oldest">
              Oldest Release
            </option>
          </select> */}
        </div>
        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <ul className="search-results__grid">
            {/* {visibleItems.map((item) => (
              <ItemCard item={item} key={item.name} onClickCard={onClickCard} />
            ))} */}
          </ul>
        )}
        {/* <div className="all-cards__view-buttons">
          {visibleCards < allCards.length && (
            <button className="all-cards_view-button" onClick={handleViewMore}>
              VIEW MORE
            </button>
          )}

          {visibleCards > 210 && (
            <button className="all-cards_view-button" onClick={handleViewLess}>
              VIEW LESS
            </button>
          )}
        </div> */}
      </div>
    </main>
  );
};

export default SearchResults;
