import "./BoosterPage.css";
import React from "react";
import { useState } from "react";
import BoosterPackStats from "../BoosterPackStats/BoosterPackStats";
import yugiohCardBack from "../../images/yu-gi-oh-card-back.png";
import blankCard from "../../images/blank-card.svg";
import CardListItem from "../CardListItem/CardListItem";
import SearchBar from "../SearchBar/SearchBar";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import defaultBooster from "../../images/default-booster.jpg";
import { IsLoadingContext } from "../contexts/IsLoadingContext";

const BoosterPage = ({
  onClickCard,
  selectedBooster,
  selectedBoosterCardList,
}) => {
  const { isLoading } = React.useContext(IsLoadingContext);
  const sanitizedSetName = selectedBooster.boosterPackName.replace(
    /[:/\\?%*|"<>]/g,
    ""
  );
  const [imgSrc, setImgSrc] = useState(
    `/images/booster-packs-1/${sanitizedSetName}.jpg`
  );
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCards = [...selectedBoosterCardList].filter((item) => {
    const cardName = item.cardName.toLowerCase();
    const query = searchQuery.toLowerCase();

    return cardName.includes(query);
  });

  return (
    <main className="booster__page">
      <h1 className="booster__title">{selectedBooster.boosterPackName}</h1>
      <div className="booster__page-background">
        <div className="booster__page-container">
          <div className="booster__container">
            <BoosterPackStats
              selectedBoosterPack={selectedBooster}
              packSize={selectedBooster.boosterPackSize}
            />
            <div className="booster__pack-opener">
              <button className="booster__pack-open-button">
                <img
                  className="booster__pack"
                  src={imgSrc}
                  onError={() => setImgSrc(defaultBooster)}
                  alt={selectedBooster.boosterPackName}
                />
              </button>
              <button className="booster__pack-card-button">
                <img
                  className="booster__card-back"
                  src={yugiohCardBack}
                  alt={"yu-gi-oh card back"}
                />
              </button>
              <button className="booster__card-button">
                <img
                  className="booster__blank-card"
                  src={blankCard}
                  alt={"yu-gi-oh card"}
                />
              </button>
            </div>
          </div>

          <div className="booster__prev-container">
            <h3 className="booster__prev-title">Last Cards Pulled</h3>

            {isLoading ? (
              <LoadingAnimation />
            ) : (
              <ul className="booster__prev-cardlist">
                {/* <CardListItem
                // item={item}
                // key={item.id}
                onClickCard={onClickCard}
                selectedBooster={selectedBooster}
              /> */}
              </ul>
            )}
          </div>

          <div className="booster__cardlist-container">
            <h3 className="booster__cardlist-title">Card List</h3>
            <div className="booster__cardlist-search-bar">
              <SearchBar
                searchBarPlaceHolder={"Search Cards..."}
                onSearchInputChange={handleSearchInputChange}
                searchQuery={searchQuery}
              />
            </div>

            {isLoading ? (
              <LoadingAnimation />
            ) : filteredCards.length === 0 ? (
              <div className="booster__cardlist-no-results">
                <p className="booster__cardlist-no-results-text">NO RESULTS</p>
              </div>
            ) : (
              <ul className="booster__cardlist">
                {filteredCards.map((item) => (
                  <CardListItem
                    item={item}
                    key={item.cardName}
                    onClickCard={onClickCard}
                    selectedBooster={selectedBooster}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BoosterPage;
