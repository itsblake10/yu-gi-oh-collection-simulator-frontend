import "./BoosterPage.css";
import ItemCard from "../ItemCard/ItemCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BoosterPackStats from "../BoosterPackStats/BoosterPackStats";
import yugiohCardBack from "../../images/yu-gi-oh-card-back.png";
import blankCard from "../../images/blank-card.svg";
import { getBoosterPackCardData } from "../../utils/ygoProDeckApi";

const BoosterPage = ({ onClickCardInfo, selectedBooster }) => {
  const [selectedBoosterCardList, setSelectedBoosterCardList] = useState([]);
  const imagePath = `/images/booster-packs/${selectedBooster.set_name}.png`;

  useEffect(() => {
    getBoosterPackCardData(selectedBooster.set_name)
      .then(({ data }) => {
        setSelectedBoosterCardList(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedBooster]);

  return (
    <main className="booster__page">
      <h1 className="booster__title">{selectedBooster.set_name}</h1>
      <div className="booster__page-background">
        <div className="booster__container">
          <BoosterPackStats selectedBoosterPack={selectedBooster} />
          <div className="booster__pack-opener">
            <button className="booster__pack-open-button">
              <img
                className="booster__pack"
                src={imagePath}
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

        <div className="booster__cardlist-container">
          <h3 className="booster__cardlist-title">Card List</h3>
          <ul className="booster__cardlist">
            {selectedBoosterCardList.map((item) => (
              <ItemCard
                item={item}
                key={item.id}
                onClickCardInfo={onClickCardInfo}
                selectedBooster={selectedBooster}
              />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default BoosterPage;
