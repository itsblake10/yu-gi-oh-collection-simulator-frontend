import "./BoosterPage.css";
import React from "react";
import { useState, useMemo } from "react";
import BoosterPackStats from "../BoosterPackStats/BoosterPackStats";
import OpenedCardItem from "../OpenedCardItem/OpenedCardItem";
import yugiohCardBack from "../../images/yu-gi-oh-card-back.jpg";
import yugiohCardBackFullStack from "../../images/yu-gi-oh-card-back-full-stack.jpg";
import yugiohCardBackHalfStack from "../../images/yu-gi-oh-card-back-half-stack.jpg";
import blankCard from "../../images/blank-card.svg";
import CardListItem from "../CardListItem/CardListItem";
import SearchBar from "../SearchBar/SearchBar";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import defaultBooster from "../../images/default-booster.jpg";
// import { IsLoadingContext } from "../contexts/IsLoadingContext";

const BoosterPage = ({
  onClickCard,
  selectedBooster,
  selectedBoosterCardList,
  isCardListLoading,
}) => {
  // const { isLoading } = React.useContext(IsLoadingContext);
  // const [isCardListLoading, setIsCardListLoading] = useState(false);
  const sanitizedSetName = selectedBooster.boosterPackName.replace(
    /[:/\\?%*|"<>]/g,
    ""
  );
  const [imgSrc, setImgSrc] = useState(
    `/images/booster-packs-1/${sanitizedSetName}.jpg`
  );
  const [cardBackImage, setCardBackImage] = useState(yugiohCardBack);
  const [cardBackClass, setCardBackClass] = useState("");
  const [boosterPackClass, setBoosterPackClass] = useState("");
  const [openedPack, setOpenedPack] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(-1);
  const [currentOpenedCards, setCurrentOpenedCards] = useState([]);
  const [primarySortOption, setPrimarySortOption] = useState("alphabetical");
  const [secondarySortOption, setSecondarySortOption] = useState("ascending");
  const [searchQuery, setSearchQuery] = useState("");

  const isBoosterOpen = cardBackImage === yugiohCardBackFullStack;

  const commonCards = useMemo(() => {
    return selectedBoosterCardList.filter((card) =>
      ["common", "short print", "super short print"].some((rarity) =>
        card.cardRarity.toLowerCase().includes(rarity)
      )
    );
  }, [selectedBoosterCardList]);

  const rareCards = useMemo(() => {
    return selectedBoosterCardList.filter((card) =>
      [
        "rare",
        "super rare",
        "ultra rare",
        "secret rare",
        "ultimate rare",
        "ghost rare",
        "ultra rare (pharaoh's rare)",
        "quarter century secret rare",
        "premium gold rare",
        "starfoil rare",
        "starlight rare",
        "collectors rare",
        "platinum secret rare",
      ].some((rarity) => card.cardRarity.toLowerCase().includes(rarity))
    );
  }, [selectedBoosterCardList]);

  const handlePrimarySortChange = (event) => {
    setPrimarySortOption(event.target.value);
    setSecondarySortOption("ascending");
  };

  const handleSecondarySortChange = (event) => {
    setSecondarySortOption(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleOpenBoosterPack = () => {
    setCardBackImage(yugiohCardBackFullStack);
    setCardBackClass("booster__card-back_visible");
    setBoosterPackClass("booster__pack_disabled");
    setCurrentCardIndex(-1);
    const selectedCommons = Array.from(
      { length: 8 },
      () => commonCards[Math.floor(Math.random() * commonCards.length)]
    );

    const selectedRares =
      rareCards[Math.floor(Math.random() * rareCards.length)];

    setOpenedPack([...selectedCommons, selectedRares]);
    setCurrentCardIndex(-1);
  };

  const handleRevealCard = () => {
    if (currentCardIndex < openedPack.length - 1) {
      setCurrentOpenedCards((prev) => [
        ...prev,
        openedPack[currentCardIndex + 1],
      ]);
      setCurrentCardIndex((prevIndex) => prevIndex + 1);
    }

    if (currentCardIndex === openedPack.length - 2) {
      setCardBackImage(yugiohCardBack);
      setCardBackClass("");
      setBoosterPackClass("");
    }

    if (currentCardIndex === openedPack.length - 3) {
      setCardBackImage(yugiohCardBack);
    }

    if (currentCardIndex === openedPack.length - 4) {
      setCardBackImage(yugiohCardBackHalfStack);
    }
  };

  const filteredCards = [...selectedBoosterCardList]
    .filter((item) => {
      const cardName = item.cardName.toLowerCase();
      const query = searchQuery.toLowerCase();

      return cardName.includes(query);
    })
    .sort((a, b) => {
      if (primarySortOption === "alphabetical") {
        return secondarySortOption === "ascending"
          ? a.cardName.localeCompare(b.cardName)
          : b.cardName.localeCompare(a.cardName);
      } else if (primarySortOption === "rarity") {
        const rarityOrder = [
          "common",
          "short print",
          "super short print",
          "rare",
          "super rare",
          "ultra rare",
          "secret rare",
          "ultimate rare",
          "ghost rare",
          "ultra rare (pharaoh's rare)",
          "quarter century secret rare",
          "premium gold rare",
          "starfoil rare",
          "starlight rare",
          "collectors rare",
          "platinum secret rare",
        ];

        const rarityComparison =
          rarityOrder.indexOf(a.cardRarity.toLowerCase()) -
          rarityOrder.indexOf(b.cardRarity.toLowerCase());

        return secondarySortOption === "ascending"
          ? rarityComparison
          : -rarityComparison;
      } else if (primarySortOption === "card code") {
        const aCode = parseInt(
          a.cardCode.includes("EN")
            ? a.cardCode.split("EN")[1]
            : a.cardCode.split("-")[1],
          10
        );
        const bCode = parseInt(
          b.cardCode.includes("EN")
            ? b.cardCode.split("EN")[1]
            : b.cardCode.split("-")[1],
          10
        );

        return secondarySortOption === "ascending"
          ? aCode - bCode
          : bCode - aCode;
      }

      return 0;
    });

  const filteredOpenedCards = [...currentOpenedCards]
    .filter((item) => {
      const cardName = item.cardName.toLowerCase();
      const query = searchQuery.toLowerCase();

      return cardName.includes(query);
    })
    .sort((a, b) => {
      if (primarySortOption === "alphabetical") {
        return secondarySortOption === "ascending"
          ? a.cardName.localeCompare(b.cardName)
          : b.cardName.localeCompare(a.cardName);
      } else if (primarySortOption === "rarity") {
        const rarityOrder = [
          "common",
          "short print",
          "super short print",
          "rare",
          "super rare",
          "ultra rare",
          "secret rare",
          "ultimate rare",
          "ghost rare",
          "ultra rare (pharaoh's rare)",
          "quarter century secret rare",
          "premium gold rare",
          "starfoil rare",
          "starlight rare",
          "collectors rare",
          "platinum secret rare",
        ];

        const rarityComparison =
          rarityOrder.indexOf(a.cardRarity.toLowerCase()) -
          rarityOrder.indexOf(b.cardRarity.toLowerCase());

        return secondarySortOption === "ascending"
          ? rarityComparison
          : -rarityComparison;
      } else if (primarySortOption === "card code") {
        const aCode = parseInt(
          a.cardCode.includes("EN")
            ? a.cardCode.split("EN")[1]
            : a.cardCode.split("-")[1],
          10
        );
        const bCode = parseInt(
          b.cardCode.includes("EN")
            ? b.cardCode.split("EN")[1]
            : b.cardCode.split("-")[1],
          10
        );

        return secondarySortOption === "ascending"
          ? aCode - bCode
          : bCode - aCode;
      }

      return 0;
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
              selectedBoosterCardList={selectedBoosterCardList}
            />
            <div className="booster__pack-opener">
              <button
                className="booster__pack-open-button"
                onClick={handleOpenBoosterPack}
                disabled={isBoosterOpen}
              >
                <img
                  className={`booster__pack_visible ${boosterPackClass}`}
                  src={imgSrc}
                  onError={() => setImgSrc(defaultBooster)}
                  alt={selectedBooster.boosterPackName}
                />
                <div className="booster__pack-slash"></div>
              </button>
              <button className="booster__pack-card-button">
                <img
                  className={`booster__card-back_disabled ${cardBackClass}`}
                  src={cardBackImage}
                  alt={"yu-gi-oh card"}
                  onClick={handleRevealCard}
                />
              </button>
              <div className="booster__card-container">
                {currentCardIndex === -1 ? (
                  <img
                    className="booster__blank-card"
                    src={blankCard}
                    alt="blank yugioh card"
                  />
                ) : (
                  <OpenedCardItem
                    item={openedPack[currentCardIndex]}
                    onClickCard={onClickCard}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="booster__prev-container">
            <h3 className="booster__prev-title">Last Cards Pulled</h3>
            <div className="booster__cardlist-options">
              <SearchBar
                searchBarPlaceHolder={"Search Cards..."}
                onSearchInputChange={handleSearchInputChange}
                searchQuery={searchQuery}
              />
              <div className="booster__cardlist-filters">
                <select
                  className="booster__cardlist-filter"
                  value={primarySortOption}
                  onChange={handlePrimarySortChange}
                >
                  <option
                    className="booster__cardlist-option"
                    value="alphabetical"
                  >
                    Alphabetical
                  </option>
                  <option
                    className="booster__cardlist-option"
                    value="card code"
                  >
                    Card Code
                  </option>
                  <option className="booster__cardlist-option" value="rarity">
                    Rarity
                  </option>
                </select>
                <select
                  className="booster__cardlist-filter"
                  value={secondarySortOption}
                  onChange={handleSecondarySortChange}
                >
                  <option
                    className="booster__cardlist-option"
                    value="ascending"
                  >
                    Ascending
                  </option>
                  <option
                    className="booster__cardlist-option"
                    value="descending"
                  >
                    Descending
                  </option>
                </select>
              </div>
            </div>
            <ul className="booster__prev-cardlist">
              {filteredOpenedCards.map((item, index) => (
                <CardListItem
                  item={item}
                  key={`${item.cardName}-${index}`}
                  onClickCard={onClickCard}
                  selectedBooster={selectedBooster}
                />
              ))}
              ;
            </ul>
          </div>

          <div className="booster__cardlist-container">
            <h3 className="booster__cardlist-title">Card List</h3>
            <div className="booster__cardlist-options">
              <SearchBar
                searchBarPlaceHolder={"Search Cards..."}
                onSearchInputChange={handleSearchInputChange}
                searchQuery={searchQuery}
              />
              <div className="booster__cardlist-filters">
                <select
                  className="booster__cardlist-filter"
                  value={primarySortOption}
                  onChange={handlePrimarySortChange}
                >
                  <option
                    className="booster__cardlist-option"
                    value="alphabetical"
                  >
                    Alphabetical
                  </option>
                  <option
                    className="booster__cardlist-option"
                    value="card code"
                  >
                    Card Code
                  </option>
                  <option className="booster__cardlist-option" value="rarity">
                    Rarity
                  </option>
                </select>
                <select
                  className="booster__cardlist-filter"
                  value={secondarySortOption}
                  onChange={handleSecondarySortChange}
                >
                  <option
                    className="booster__cardlist-option"
                    value="ascending"
                  >
                    Ascending
                  </option>
                  <option
                    className="booster__cardlist-option"
                    value="descending"
                  >
                    Descending
                  </option>
                </select>
              </div>
            </div>

            {isCardListLoading ? (
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
