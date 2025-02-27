import "./Main.css";
import React, { useState, useMemo, useEffect } from "react";
import ItemBooster from "../ItemBooster/ItemBooster";
import SearchBar from "../SearchBar/SearchBar";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import backToTopButton from "../../images/back-to-top-button.svg";

const Main = ({
  boosterPacks,
  onClickBoosterPack,
  onScrollToTop,
  onScrollToBottom,
  isBoosterPacksLoading,
}) => {
  const [primarySortOption, setPrimarySortOption] = useState(
    localStorage.getItem("primarySortOption") || "release-date"
  );

  const [secondarySortOption, setSecondarySortOption] = useState(
    localStorage.getItem("secondarySortOption") || "descending"
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [visibleBoosterPacks, setVisibleBoosterPacks] = useState(30);

  useEffect(() => {
    localStorage.setItem("primarySortOption", primarySortOption);
    localStorage.setItem("secondarySortOption", secondarySortOption);
  }, [primarySortOption, secondarySortOption]);

  const handlePrimarySortChange = (event) => {
    setPrimarySortOption(event.target.value);

    if (event.target.value === "alphabetical") {
      setSecondarySortOption("ascending");
    } else {
      setSecondarySortOption("descending");
    }
  };

  const handleSecondarySortChange = (event) => {
    setSecondarySortOption(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBoosterPacks = useMemo(() => {
    return [...boosterPacks]
      .filter((item) => {
        const setName = item.boosterPackName.toLowerCase();
        const query = searchQuery.toLowerCase();

        return (
          !setName.includes("starter deck") &&
          !setName.includes("structure deck") &&
          !setName.includes("promotion") &&
          !setName.includes("starter set") &&
          !setName.includes("25th anniversary tin: dueling mirrors") &&
          !setName.includes("25th anniversary ultimate kaiba set") &&
          !setName.includes("25th anniversary tin: dueling heroes") &&
          !setName.includes("speed duel: streets of battle city") &&
          !setName.includes("the pot collection") &&
          !setName.includes("(por)") &&
          !setName.includes("speed duel gx: duelists of shadows") &&
          !setName.includes("speed duel gx: midterm paradox") &&
          !setName.includes("speed duel gx: duel academy box") &&
          !setName.includes("duel terminal - preview wave 1") &&
          !setName.includes("egyptian god deck: obelisk the tormentor") &&
          !setName.includes("egyptian god deck: slifer the sky dragon") &&
          item.boosterPackTotalCards >= 10 &&
          setName.includes(query)
        );
      })
      .sort((a, b) => {
        if (primarySortOption === "alphabetical") {
          return secondarySortOption === "ascending"
            ? a.boosterPackName.localeCompare(b.boosterPackName)
            : b.boosterPackName.localeCompare(a.boosterPackName);
        } else {
          return secondarySortOption === "descending"
            ? new Date(b.boosterPackReleaseDate) -
                new Date(a.boosterPackReleaseDate)
            : new Date(a.boosterPackReleaseDate) -
                new Date(b.boosterPackReleaseDate);
        }
      });
  }, [boosterPacks, searchQuery, primarySortOption, secondarySortOption]);

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
      <button className="home__page-to-top-button" onClick={onScrollToTop}>
        <img
          className="home__page-to-top-button-image"
          src={backToTopButton}
          alt="scroll to top"
        />
      </button>
      <button
        className="home__page-to-bottom-button"
        onClick={onScrollToBottom}
      >
        <img
          className="home__page-to-bottom-button-image"
          src={backToTopButton}
          alt="scroll to bottom"
        />
      </button>
      <h1 className="home__title">Booster Packs</h1>
      <div className="home__container">
        <div className="home__grid-options">
          <SearchBar
            searchBarPlaceHolder={"Search Booster Packs..."}
            onSearchInputChange={handleSearchInputChange}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <div className="home__grid-filters">
            <select
              className="home__grid-filter"
              value={primarySortOption}
              onChange={handlePrimarySortChange}
            >
              <option className="home__grid-option" value="release-date">
                Release Date
              </option>
              <option className="home__grid-option" value="alphabetical">
                Alphabetical
              </option>
            </select>
            <select
              className="home__grid-filter"
              value={secondarySortOption}
              onChange={handleSecondarySortChange}
            >
              <option className="home__grid-option" value="ascending">
                Ascending
              </option>
              <option className="home__grid-option" value="descending">
                Descending
              </option>
            </select>
          </div>
        </div>
        {isBoosterPacksLoading ? (
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
