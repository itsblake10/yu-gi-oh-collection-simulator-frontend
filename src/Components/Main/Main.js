import "./Main.css";
import React, { useState } from "react";
import ItemBooster from "../ItemBooster/ItemBooster";
import SearchBar from "../SearchBar/SearchBar";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { IsLoadingContext } from "../contexts/IsLoadingContext";

const Main = ({ boosterPacks, onClickBoosterPack }) => {
  const { isLoading } = React.useContext(IsLoadingContext);

  const [sortOrder, setSortOrder] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleBoosterPacks, setVisibleBoosterPacks] = useState(30);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBoosterPacks = [...boosterPacks]
    .filter((item) => {
      const setName = item.boosterPackName.toLowerCase();
      const query = searchQuery.toLowerCase();

      return (
        !setName.includes("starter deck") &&
        !setName.includes("structure deck") &&
        item.boosterPackTotalCards >= 10 &&
        setName.includes(query)
      );
    })
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return (
          new Date(b.boosterPackReleaseDate) -
          new Date(a.boosterPackReleaseDate)
        );
      } else {
        return (
          new Date(a.boosterPackReleaseDate) -
          new Date(b.boosterPackReleaseDate)
        );
      }
    });

  // const sortedBoosterPacks = [...boosterPacks]
  //   .filter((item) => {
  //     const setName = item.boosterPackName.toLowerCase();
  //     return (
  //       !setName.includes("starter deck") && !setName.includes("structure deck")
  //     );
  //   })
  //   .filter((item) => {
  //     return item.boosterPackTotalCards >= 10;
  //   })
  //   .sort((a, b) => {
  //     if (sortOrder === "newest") {
  //       return (
  //         new Date(b.boosterPackReleaseDate) -
  //         new Date(a.boosterPackReleaseDate)
  //       );
  //     } else {
  //       return (
  //         new Date(a.boosterPackReleaseDate) -
  //         new Date(b.boosterPackReleaseDate)
  //       );
  //     }
  //   });

  const handleViewMore = () => {
    setVisibleBoosterPacks((prevVisiblePacks) => prevVisiblePacks + 30);
  };

  const handleViewLess = () => {
    setVisibleBoosterPacks((prevVisiblePacks) =>
      Math.max(prevVisiblePacks - 30, 30)
    );
  };

  const visibleItems = filteredBoosterPacks.slice(0, visibleBoosterPacks);

  return (
    <main className="home__page">
      <h1 className="home__title">Booster Packs</h1>
      <div className="home__container">
        <div className="home__grid-options">
          <SearchBar
            searchBarPlaceHolder={"Search Booster Packs..."}
            onSearchInputChange={handleSearchInputChange}
            searchQuery={searchQuery}
          />
          <select
            className="home__grid-filter"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option className="home__grid-option" value="newest">
              Newest Release
            </option>
            <option className="home__grid-option" value="oldest">
              Oldest Release
            </option>
          </select>
        </div>
        {isLoading ? (
          <LoadingAnimation />
        ) : filteredBoosterPacks.length === 0 ? (
          <div className="home__grid-no-results">
            <p className="home__grid-no-results-text">NO RESULTS</p>
          </div>
        ) : (
          <ul className="home__grid">
            {visibleItems.map((item) => (
              <ItemBooster
                item={item}
                key={item.boosterPackName}
                onClickBoosterPack={onClickBoosterPack}
              />
            ))}
          </ul>
        )}
        <div className="home__grid-view-buttons">
          {visibleBoosterPacks < filteredBoosterPacks.length && (
            <button className="home__grid-view-button" onClick={handleViewMore}>
              VIEW MORE
            </button>
          )}

          {visibleBoosterPacks > 30 && (
            <button className="home__grid-view-button" onClick={handleViewLess}>
              VIEW LESS
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
