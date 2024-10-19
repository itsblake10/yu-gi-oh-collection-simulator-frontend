import "./CardInfoModal.css";
import closeIcon from "../../images/close-icon.svg";

const CardInfoModal = ({
  onClose,
  selectedCard,
  selectedBooster,
  cardCode,
  cardRarity,
}) => {
  const imagePath = `/images/cards-1/${selectedCard.name}_${selectedBooster.set_code}.jpg`;

  return (
    <div className="modal">
      <div className="modal__container">
        <img
          className="modal__close-button"
          src={closeIcon}
          alt="close Button"
          onClick={onClose}
        />
        <p className="modal__title">Card Information</p>
        <div className="card-info__container">
          <img
            className="card-info__Image"
            src={imagePath}
            alt={selectedCard.name}
          />
          <ul className="card-info__list">
            <li className="card-info__list-label">
              Code:<span className="card-info__list-item">{cardCode}</span>
            </li>
            <li className="card-info__list-label">
              Name:
              <span className="card-info__list-item">{selectedCard.name}</span>
            </li>
            <li className="card-info__list-label">
              Rarity:<span className="card-info__list-item">{cardRarity}</span>
            </li>
            <li className="card-info__list-label">
              Card Type:
              <span className="card-info__list-item">{selectedCard.type}</span>
            </li>
            <li className="card-info__list-label">
              Types:
              <span className="card-info__list-item">
                {selectedCard.race}/{selectedCard.humanReadableCardType}
              </span>
            </li>
            <li className="card-info__list-label">
              Attribute:
              <span className="card-info__list-item">
                {selectedCard.attribute}
              </span>
            </li>
            <li className="card-info__list-label">
              Level:
              <span className="card-info__list-item">{selectedCard.level}</span>
            </li>
            <li className="card-info__list-label">
              ATK / DEF:
              <span className="card-info__list-item">
                {selectedCard.atk} / {selectedCard.def}
              </span>
            </li>
            <li className="card-info__list-label">
              Description:
              <p className="card-info__list-item_description">
                {selectedCard.desc}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardInfoModal;
