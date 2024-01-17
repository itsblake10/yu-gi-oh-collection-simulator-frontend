import "./BoosterModal.css";
import closeIcon from "../../images/close-icon.svg";
import ItemCard from "../ItemCard/ItemCard";

const BoosterModal = ({ selectedBooster, onClose }) => {
  return (
    <div className="booster__modal">
      <div className="booster__modal-container">
        <img
          className="booster__modal-close-button"
          src={closeIcon}
          alt="close Button"
          onClick={onClose}
        />
        <h1 className="booster__modal-title">{selectedBooster.name}</h1>
        <div className="booster__modal-pack-opener">
          <img
            className="booster__modal-pack"
            src={selectedBooster.boosterImage}
            alt={selectedBooster.name}
          />
          <div className="booster__modal-breakdown-container">
            <h2 className="booster__modal-breakdown-title">Pack Breakdown</h2>
            <div className="booster__modal-list-container">
              <ul className="booster__modal-breakdown-list_total">
                <h3 className="booster__modal-list-container-title">Total</h3>
                <li className="booster__modal-breakdown-list-item">
                  Common:
                  <p
                    className="booster__modal-breakdown-list-qauntity"
                    id="total-common"
                  >
                    {selectedBooster.common}
                  </p>
                </li>
                <li className="booster__modal-breakdown-list-item">
                  Rare:
                  <p
                    className="booster__modal-breakdown-list-qauntity"
                    id="total-rare"
                  >
                    {selectedBooster.rare}
                  </p>
                </li>
                <li className="booster__modal-breakdown-list-item">
                  Super Rare:
                  <p
                    className="booster__modal-breakdown-list-qauntity"
                    id="total-super-rare"
                  >
                    {selectedBooster.superRare}
                  </p>
                </li>
                <li className="booster__modal-breakdown-list-item">
                  Ultra Rare:
                  <p
                    className="booster__modal-breakdown-list-qauntity"
                    id="total-ultra-rare"
                  >
                    {selectedBooster.ultraRare}
                  </p>
                </li>
                <li className="booster__modal-breakdown-list-item">
                  Secret Rare:
                  <p
                    className="booster__modal-breakdown-list-qauntity"
                    id="total-secret-rare"
                  >
                    {selectedBooster.secretRare}
                  </p>
                </li>
              </ul>

              <ul className="booster__modal-breakdown-list_opened">
                <h3 className="booster__modal-list-container-title">Opened</h3>
                <li className="booster__modal-breakdown-list-item">
                  Common:
                  <p className="booster__modal-breakdown-list-qauntity">0</p>
                </li>
                <li className="booster__modal-breakdown-list-item">
                  Rare:
                  <p className="booster__modal-breakdown-list-qauntity">0</p>
                </li>
                <li className="booster__modal-breakdown-list-item">
                  Super Rare:
                  <p className="booster__modal-breakdown-list-qauntity">0</p>
                </li>
                <li className="booster__modal-breakdown-list-item">
                  Ultra Rare:
                  <p className="booster__modal-breakdown-list-qauntity">0</p>
                </li>
                <li className="booster__modal-breakdown-list-item">
                  Secret Rare:
                  <p className="booster__modal-breakdown-list-qauntity">0</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="booster__modal-cardlist-container">
          <h3 className="booster__modal-cardlist-title">Card List</h3>
          <ul className="booster__modal-cardlist">
            {selectedBooster.cardList.map((item) => (
              <ItemCard item={item} key={item._id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BoosterModal;
