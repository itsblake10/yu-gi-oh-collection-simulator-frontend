import "./Main.css";
import React, { useState } from "react";
import ItemBooster from "../ItemBooster/ItemBooster";
import SearchBar from "../SearchBar/SearchBar";

const Main = ({ boosterPacks, onClickBoosterPack }) => {
  const [sortOrder, setSortOrder] = useState("newest");

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedBoosterPacks = [...boosterPacks].sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.tcg_date) - new Date(a.tcg_date);
    } else {
      return new Date(a.tcg_date) - new Date(b.tcg_date);
    }
  });

  // const filteredBoosterPacks = sortedBoosterPacks.filter(
  //   (item) => item.num_of_cards >= 2 && item.num_of_cards <= 15
  // );

  return (
    <main className="home__page">
      <h1 className="home__title">Booster Packs</h1>
      <div className="home__container">
        <div className="home__grid-options">
          <SearchBar className="home__grid-searchbar" />
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
        <ul className="home__grid">
          {sortedBoosterPacks.map((item) => (
            <ItemBooster
              item={item}
              key={item.set_name}
              onClickBoosterPack={onClickBoosterPack}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Main;
