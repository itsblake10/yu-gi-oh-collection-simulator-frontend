import "./BoosterPage.css";
import React from "react";
import { useState, useMemo, useEffect } from "react";
import BoosterPackStats from "../BoosterPackStats/BoosterPackStats";
import OpenedCardItem from "../OpenedCardItem/OpenedCardItem";
import yugiohCardBack from "../../images/yu-gi-oh-card-back.jpg";
import yugiohCardBackFullStack from "../../images/yu-gi-oh-card-back-full-stack.jpg";
import yugiohCardBackHalfStack from "../../images/yu-gi-oh-card-back-half-stack.jpg";
import blankCard from "../../images/blank-card.svg";
import CardListItem from "../CardListItem/CardListItem";
import SearchBar from "../SearchBar/SearchBar";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import LoadingAnimationTwo from "../LoadingAnimationTwo/LoadingAnimationTwo";
import defaultBooster from "../../images/default-booster.jpg";

const BoosterPage = ({
  onClickCard,
  selectedBooster,
  selectedBoosterCardList,
}) => {
  const sanitizedSetName = selectedBooster.boosterPackName.replace(
    /[:/\\?%*|"<>]/g,
    ""
  );

  const [imgSrc, setImgSrc] = useState(
    `https://res.cloudinary.com/dsvu6oqd2/image/upload/v1736345586/${sanitizedSetName}.jpg`
  );
  const [cardBackImage, setCardBackImage] = useState(yugiohCardBack);
  const [cardBackClass, setCardBackClass] = useState("");
  const [boosterPackClass, setBoosterPackClass] = useState("");
  const [openedPack, setOpenedPack] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(-1);
  const [currentOpenedCards, setCurrentOpenedCards] = useState([]);
  const [cardListSortOptions, setCardListSortOptions] = useState({
    primary: "alphabetical",
    secondary: "ascending",
  });
  const [openedCardsSortOptions, setOpenedCardsSortOptions] = useState({
    primary: "alphabetical",
    secondary: "ascending",
  });

  const [CardlistSearchQuery, setCardlistSearchQuery] = useState("");
  const [OpenedCardsSearchQuery, setOpenedCardsSearchQuery] = useState("");

  const [loadedCards, setLoadedCards] = useState(0);
  const [isCardListLoading, setIsCardListLoading] = useState(true);
  const [cardListClass, setCardListClass] = useState(
    "booster__cardlist_hidden"
  );
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [filteredCardList, setFilteredCardList] = useState([]);

  /* ---------------------------- CARDLIST LOADING ---------------------------- */
  useEffect(() => {
    if (loadedCards === selectedBoosterCardList.length) {
      setIsCardListLoading(false);
      setCardListClass("");
    }
  }, [loadedCards, selectedBoosterCardList.length]);

  useEffect(() => {
    setLoadedCards(0);
    setIsCardListLoading(true);
    setCardListClass("booster__cardlist_hidden");
  }, [selectedBoosterCardList]);

  const handleCardLoad = () => {
    setLoadedCards((prev) => prev + 1);
    console.log("image loaded");
  };

  const isBoosterOpen = cardBackImage === yugiohCardBackFullStack;

  /* ------------------------------- CARD GROUPS ------------------------------ */
  const cardGroups = useMemo(() => {
    const common = ["common", "short print", "super short print"];
    const rare = [
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
    return {
      commonCards: selectedBoosterCardList.filter((card) =>
        common.some((rarity) => card.cardRarity.toLowerCase().includes(rarity))
      ),
      rareCards: selectedBoosterCardList.filter((card) =>
        rare.some((rarity) => card.cardRarity.toLowerCase().includes(rarity))
      ),
    };
  }, [selectedBoosterCardList]);

  /* ----------------------------- SORTING OPTIONS ---------------------------- */
  const handlePrimarySortChange = (event) => {
    if (event.target.id === "opened-cards-primary") {
      setOpenedCardsSortOptions((prev) => {
        return { ...prev, primary: event.target.value };
      });
    }

    if (event.target.id === "card-list-primary") {
      setCardListSortOptions((prev) => {
        return { ...prev, primary: event.target.value };
      });
    }
  };

  const handleSecondarySortChange = (event) => {
    if (event.target.id === "opened-cards-secondary") {
      setOpenedCardsSortOptions((prev) => {
        return { ...prev, secondary: event.target.value };
      });
    }

    if (event.target.id === "card-list-secondary") {
      setCardListSortOptions((prev) => {
        return { ...prev, secondary: event.target.value };
      });
    }
  };

  const handleCardlistSearchInputChange = (event) => {
    setCardlistSearchQuery(event.target.value);
  };

  const handleOpenedCardsSearchInputChange = (event) => {
    setOpenedCardsSearchQuery(event.target.value);
  };

  /* -------------------------- BOOSTER PACK OPENING -------------------------- */
  const handleOpenBoosterPack = () => {
    setCardBackImage(yugiohCardBackFullStack);
    setCardBackClass("booster__card-back_visible");
    setBoosterPackClass("booster__pack_disabled");
    setCurrentCardIndex(-1);
    const selectedCommons = Array.from(
      { length: selectedBooster.boosterPackSize - 1 },
      () =>
        cardGroups.commonCards[
          Math.floor(Math.random() * cardGroups.commonCards.length)
        ]
    );

    const selectedRares =
      cardGroups.rareCards[
        Math.floor(Math.random() * cardGroups.rareCards.length)
      ];

    setOpenedPack([...selectedCommons, selectedRares]);
    setCurrentCardIndex(-1);
  };

  const handleRevealCard = () => {
    if (currentCardIndex < openedPack.length - 1) {
      setIsButtonDisabled(true);
      setTimeout(() => {
        setCurrentOpenedCards((prev) => [
          ...prev,
          openedPack[currentCardIndex + 1],
        ]);
        setCurrentCardIndex((prevIndex) => prevIndex + 1);

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

        setIsButtonDisabled(false);
      }, 1000);
    }
  };

  /* --------------------- FILTERING AND SORTING CARDLIST --------------------- */
  useEffect(() => {
    const filteredCards = [...selectedBoosterCardList]
      .filter((item) => {
        const cardName = item.cardName.toLowerCase();
        const query = CardlistSearchQuery.toLowerCase();

        return cardName.includes(query);
      })
      .sort((a, b) => {
        if (cardListSortOptions.primary === "alphabetical") {
          return cardListSortOptions.secondary === "ascending"
            ? a.cardName.localeCompare(b.cardName)
            : b.cardName.localeCompare(a.cardName);
        } else if (cardListSortOptions.primary === "rarity") {
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

          return cardListSortOptions.secondary === "ascending"
            ? rarityComparison
            : -rarityComparison;
        } else if (cardListSortOptions.primary === "card code") {
          const parseCode = (code) => parseInt(code.replace(/[^0-9]/g, ""), 10);

          return cardListSortOptions.secondary === "ascending"
            ? parseCode(a.cardCode) - parseCode(b.cardCode)
            : parseCode(b.cardCode) - parseCode(a.cardCode);
        }

        return 0;
      });

    setFilteredCardList(filteredCards);
  }, [selectedBoosterCardList, CardlistSearchQuery, cardListSortOptions]);

  /* ----------------- FILTERING AND SORTING OPENED CARDLIST ---------------- */
  const filteredOpenedCards = [...currentOpenedCards]
    .filter((item) => {
      const cardName = item.cardName.toLowerCase();
      const query = OpenedCardsSearchQuery.toLowerCase();

      return cardName.includes(query);
    })
    .sort((a, b) => {
      if (openedCardsSortOptions.primary === "alphabetical") {
        return openedCardsSortOptions.secondary === "ascending"
          ? a.cardName.localeCompare(b.cardName)
          : b.cardName.localeCompare(a.cardName);
      } else if (openedCardsSortOptions.primary === "rarity") {
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

        return openedCardsSortOptions.secondary === "ascending"
          ? rarityComparison
          : -rarityComparison;
      } else if (openedCardsSortOptions.primary === "card code") {
        const parseCode = (code) => parseInt(code.replace(/[^0-9]/g, ""), 10);

        return openedCardsSortOptions.secondary === "ascending"
          ? parseCode(a.cardCode) - parseCode(b.cardCode)
          : parseCode(b.cardCode) - parseCode(a.cardCode);
      }

      return 0;
    });

  return (
    <main className="booster__page">
      <h1 className="booster__title">{selectedBooster.boosterPackName}</h1>
      <div className="booster__page-background">
        <div className="booster__page-container">
          {/* <button
            className="booster__page-back-button"
            // onClick={}
          >
            <img
              className="booster__page-back-button-image"
              src={backToTopButton}
              alt="back button"
            />
          </button> */}
          <div className="booster__container">
            <BoosterPackStats
              selectedBoosterPack={selectedBooster}
              packSize={selectedBooster.boosterPackSize}
              totalCards={filteredCardList.length}
              selectedBoosterCardList={selectedBoosterCardList}
            />

            <div className="booster__pack-opener">
              {isCardListLoading ? (
                <LoadingAnimationTwo />
              ) : (
                <>
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
                  <button
                    className="booster__pack-card-button"
                    onClick={handleRevealCard}
                    disabled={isButtonDisabled}
                  >
                    <img
                      className={`booster__card-back_disabled ${cardBackClass}`}
                      src={cardBackImage}
                      alt={"yu-gi-oh card"}
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
                </>
              )}
            </div>
          </div>

          <div className="booster__prev-container">
            <h3 className="booster__prev-title">Last Cards Pulled</h3>
            <div className="booster__cardlist-options">
              <SearchBar
                searchBarPlaceHolder={"Search Cards..."}
                onSearchInputChange={handleOpenedCardsSearchInputChange}
                searchQuery={OpenedCardsSearchQuery}
                setSearchQuery={setOpenedCardsSearchQuery}
              />
              <div className="booster__cardlist-filters">
                <select
                  className="booster__cardlist-filter"
                  value={openedCardsSortOptions.primary}
                  id="opened-cards-primary"
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
                  value={openedCardsSortOptions.secondary}
                  onChange={handleSecondarySortChange}
                  id="opened-cards-secondary"
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
                  key={`${item.cardName}-${item.cardCode}-${index}`}
                  onClickCard={onClickCard}
                  selectedBooster={selectedBooster}
                />
              ))}
            </ul>
          </div>

          <div className="booster__cardlist-container">
            <h3 className="booster__cardlist-title">Card List</h3>
            <div className="booster__cardlist-options">
              <SearchBar
                searchBarPlaceHolder={"Search Cards..."}
                onSearchInputChange={handleCardlistSearchInputChange}
                searchQuery={CardlistSearchQuery}
                setSearchQuery={setCardlistSearchQuery}
              />
              <div className="booster__cardlist-filters">
                <select
                  className="booster__cardlist-filter"
                  value={cardListSortOptions.primary}
                  onChange={handlePrimarySortChange}
                  id="card-list-primary"
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
                  value={cardListSortOptions.secondary}
                  onChange={handleSecondarySortChange}
                  id="card-list-secondary"
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
            {filteredCardList.length === 0 ? (
              <div className="booster__cardlist-no-results">
                <p className="booster__cardlist-no-results-text">NO RESULTS</p>
              </div>
            ) : (
              <>
                {isCardListLoading && <LoadingAnimation />}
                <ul className={`booster__cardlist ${cardListClass}`}>
                  {filteredCardList.map((item) => (
                    <CardListItem
                      item={item}
                      key={`${item.cardName}-${item.cardCode}`}
                      onClickCard={onClickCard}
                      selectedBooster={selectedBooster}
                      handleCardLoad={handleCardLoad}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BoosterPage;
