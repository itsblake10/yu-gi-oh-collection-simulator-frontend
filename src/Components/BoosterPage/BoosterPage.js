import "./BoosterPage.css";
import React from "react";
import { useState } from "react";
import BoosterPackStats from "../BoosterPackStats/BoosterPackStats";
import yugiohCardBack from "../../images/yu-gi-oh-card-back.png";
import blankCard from "../../images/blank-card.svg";
import CardListItem from "../CardListItem/CardListItem";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { boosterPackData } from "../../utils/BoosterPacks";
import defaultBooster from "../../images/default-booster.jpg";
import { IsLoadingContext } from "../contexts/IsLoadingContext";

const BoosterPage = ({
  onClickCard,
  selectedBooster,
  selectedBoosterCardList,
}) => {
  const { isLoading } = React.useContext(IsLoadingContext);
  const sanitizedSetName = selectedBooster.set_name.replace(
    /[:/\\?%*|"<>]/g,
    ""
  );
  const [imgSrc, setImgSrc] = useState(
    `/images/booster-packs-1/${sanitizedSetName}.jpg`
  );

  const packSize = boosterPackData[selectedBooster.set_code]?.packSize || "???";

  return (
    <main className="booster__page">
      <h1 className="booster__title">{selectedBooster.set_name}</h1>
      <div className="booster__page-background">
        <div className="booster__container">
          <BoosterPackStats
            selectedBoosterPack={selectedBooster}
            packSize={packSize}
          />
          <div className="booster__pack-opener">
            <button className="booster__pack-open-button">
              <img
                className="booster__pack"
                src={imgSrc}
                onError={() => setImgSrc(defaultBooster)}
                alt={selectedBooster.set_name}
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

          {isLoading ? (
            <LoadingAnimation />
          ) : (
            <ul className="booster__cardlist">
              {selectedBoosterCardList.map((item) => (
                <CardListItem
                  item={item}
                  key={item.id}
                  onClickCard={onClickCard}
                  selectedBooster={selectedBooster}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
};

export default BoosterPage;
