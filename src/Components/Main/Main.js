import "./Main.css";
import React, { useState } from "react";
import ItemBooster from "../ItemBooster/ItemBooster";
import SearchBar from "../SearchBar/SearchBar";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { IsLoadingContext } from "../contexts/IsLoadingContext";

const Main = ({ boosterPacks, onClickBoosterPack }) => {
  const { isLoading } = React.useContext(IsLoadingContext);

  const [sortOrder, setSortOrder] = useState("newest");
  const [visibleBoosterPacks, setVisibleBoosterPacks] = useState(30);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedBoosterPacks = [...boosterPacks]
    .filter((item) => {
      const setName = item.set_name.toLowerCase();
      return (
        !setName.includes("starter deck") && !setName.includes("structure deck")
      );
    })
    .filter((item) => {
      return item.num_of_cards >= 10;
    })
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.tcg_date) - new Date(a.tcg_date);
      } else {
        return new Date(a.tcg_date) - new Date(b.tcg_date);
      }
    });

  const handleViewMore = () => {
    setVisibleBoosterPacks((prevVisiblePacks) => prevVisiblePacks + 30);
  };

  const handleViewLess = () => {
    setVisibleBoosterPacks((prevVisiblePacks) =>
      Math.max(prevVisiblePacks - 30, 30)
    );
  };

  const visibleItems = sortedBoosterPacks.slice(0, visibleBoosterPacks);

  return (
    <main className="home__page">
      <h1 className="home__title">Booster Packs</h1>
      <div className="home__container">
        <div className="home__grid-options">
          <SearchBar searchBarPlaceHolder={"Search Booster Packs..."} />
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
        ) : (
          <ul className="home__grid">
            {visibleItems.map((item) => (
              <ItemBooster
                item={item}
                key={item.set_name}
                onClickBoosterPack={onClickBoosterPack}
              />
            ))}
          </ul>
        )}
        <div className="home__grid-view-buttons">
          {visibleBoosterPacks < sortedBoosterPacks.length && (
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
