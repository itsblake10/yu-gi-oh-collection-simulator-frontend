import "./BoosterPage.css";
import ItemCard from "../ItemCard/ItemCard";
import { useParams } from "react-router-dom";
import { boosterPacks } from "../../utils/boosterPackData";
import BoosterPackStats from "../BoosterPackStats/BoosterPackStats";
import yugiohCardBack from "../../images/yu-gi-oh-card-back.png";
import blankCard from "../../images/blank-card.svg";

const BoosterPage = ({ onClickCardInfo }) => {
  console.log("BoosterPage component rendered");

  let { id } = useParams();
  console.log("ID from useParams:", id);

  const selectedBooster = boosterPacks[`${id}`];

  return (
    <main className="booster__page">
      <h1 className="booster__title">{selectedBooster.name}</h1>
      <div className="booster__page-background">
        <div className="booster__container">
          <BoosterPackStats selectedBoosterPack={selectedBooster} />
          <div className="booster__pack-opener">
            <button className="booster__pack-open-button">
              <img
                className="booster__pack"
                src={selectedBooster.boosterImage}
                alt={selectedBooster.name}
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
            {selectedBooster.cardList.map((item) => (
              <ItemCard
                item={item}
                key={item._id}
                onClickCardInfo={onClickCardInfo}
              />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default BoosterPage;
