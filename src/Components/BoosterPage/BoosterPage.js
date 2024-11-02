import "./BoosterPage.css";
import React from "react";
import { useState } from "react";
import BoosterPackStats from "../BoosterPackStats/BoosterPackStats";
import yugiohCardBack from "../../images/yu-gi-oh-card-back.jpg";
import yugiohCardBackStack from "../../images/yu-gi-oh-card-back-stack.jpg";
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
  const [cardImage, setCardImage] = useState(yugiohCardBack);
  const [cardClass, setCardClass] = useState("");
  const [sortOrder, setSortOrder] = useState("alphabetical");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleOpenBoosterPack = () => {
    setCardImage(yugiohCardBackStack);
    setCardClass("booster__card-back_visible");
  };

  const filteredCards = [...selectedBoosterCardList]
    .filter((item) => {
      const cardName = item.cardName.toLowerCase();
      const query = searchQuery.toLowerCase();

      return cardName.includes(query);
    })
    .sort((a, b) => {
      switch (sortOrder) {
        case "alphabetical":
          return a.cardName.localeCompare(b.cardName);

        case "rarity":
          const rarityOrder = [
            "common",
            "short print",
            "super short print",
            "rare",
            "super rare",
            "secret rare",
            "ultra rare",
          ];
          return (
            rarityOrder.indexOf(a.cardRarity.toLowerCase()) -
            rarityOrder.indexOf(b.cardRarity.toLowerCase())
          );

        case "card code":
          const aCode = parseInt(a.cardCode.split("-")[1], 10);
          const bCode = parseInt(b.cardCode.split("-")[1], 10);
          return aCode - bCode;

        default:
          return 0;
      }
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
              totalCards={filteredCards.length}
            />
            <div className="booster__pack-opener">
              <button
                className="booster__pack-open-button"
                onClick={handleOpenBoosterPack}
              >
                <img
                  className="booster__pack"
                  src={imgSrc}
                  onError={() => setImgSrc(defaultBooster)}
                  alt={selectedBooster.boosterPackName}
                />
              </button>
              <button className="booster__pack-card-button">
                <img
                  className={`booster__card-back ${cardClass}`}
                  src={cardImage}
                  alt={"yu-gi-oh card"}
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
            <div className="booster__cardlist-options">
              <SearchBar
                searchBarPlaceHolder={"Search Cards..."}
                onSearchInputChange={handleSearchInputChange}
                searchQuery={searchQuery}
              />
              <select
                className="booster__cardlist-filter"
                value={sortOrder}
                onChange={handleSortChange}
              >
                <option
                  className="booster__cardlist-option"
                  value="alphabetical"
                >
                  Alphabetical
                </option>
                <option className="booster__cardlist-option" value="card code">
                  Card Code
                </option>
                <option className="booster__cardlist-option" value="rarity">
                  Rarity
                </option>
              </select>
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
