import "./BoosterPage.css";
import ItemCard from "../ItemCard/ItemCard";
import { useParams } from "react-router-dom";
import { boosterPacks } from "../../utils/boosterPackData";
import yugiohCardBack from "../../images/yu-gi-oh-card-back.png";

const BoosterPage = () => {
  console.log("BoosterPage component rendered");

  let { id } = useParams();
  console.log("ID from useParams:", id);

  const selectedBooster = boosterPacks[`${id}`];

  return (
    <main className="booster__page">
      <h1 className="booster__title">{selectedBooster.name}</h1>
      <div className="booster__container">
        <div className="booster__breakdown-container">
          <h2 className="booster__breakdown-title">Pack Breakdown</h2>
          <h3 className="booster__breakdown-pack-size">
            Pack Size: {selectedBooster.packSize} Cards
          </h3>
          <div className="booster__breakdown-list">
            <ul className="booster__breakdown-list_total">
              <p className="booster__list-container-title">
                Total: {selectedBooster.totalCards}
              </p>
              <li className="booster__breakdown-list-item">
                Common:
                <p
                  className="booster__breakdown-list-qauntity"
                  id="total-common"
                >
                  {selectedBooster.common}
                </p>
              </li>
              <li className="booster__breakdown-list-item">
                Rare:
                <p className="booster__breakdown-list-qauntity" id="total-rare">
                  {selectedBooster.rare}
                </p>
              </li>
              <li className="booster__breakdown-list-item">
                Super Rare:
                <p
                  className="booster__breakdown-list-qauntity"
                  id="total-super-rare"
                >
                  {selectedBooster.superRare}
                </p>
              </li>
              <li className="booster__breakdown-list-item">
                Ultra Rare:
                <p
                  className="booster__breakdown-list-qauntity"
                  id="total-ultra-rare"
                >
                  {selectedBooster.ultraRare}
                </p>
              </li>
              <li className="booster__breakdown-list-item">
                Secret Rare:
                <p
                  className="booster__breakdown-list-qauntity"
                  id="total-secret-rare"
                >
                  {selectedBooster.secretRare}
                </p>
              </li>
            </ul>

            <ul className="booster__breakdown-list_opened">
              <p className="booster__list-container-title">Opened: 0</p>
              <li className="booster__breakdown-list-item">
                Common:
                <p className="booster__breakdown-list-qauntity">0</p>
              </li>
              <li className="booster__breakdown-list-item">
                Rare:
                <p className="booster__breakdown-list-qauntity">0</p>
              </li>
              <li className="booster__breakdown-list-item">
                Super Rare:
                <p className="booster__breakdown-list-qauntity">0</p>
              </li>
              <li className="booster__breakdown-list-item">
                Ultra Rare:
                <p className="booster__breakdown-list-qauntity">0</p>
              </li>
              <li className="booster__breakdown-list-item">
                Secret Rare:
                <p className="booster__breakdown-list-qauntity">0</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="booster__pack-opener">
          <button className="booster__pack-open-button">
            <img
              className="booster__pack"
              src={selectedBooster.boosterImage}
              alt={selectedBooster.name}
            />
          </button>
          <span className="booster__pack_animation"></span>
        </div>
      </div>

      <div className="booster__cardlist-container">
        <h3 className="booster__cardlist-title">Card List</h3>
        <ul className="booster__cardlist">
          {selectedBooster.cardList.map((item) => (
            <ItemCard item={item} key={item._id} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default BoosterPage;
