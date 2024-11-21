import "./CardInfoModal.css";
import defaultCardImage from "../../images/blank-card.svg";
import { useState } from "react";

const CardInfoModal = ({ onClose, selectedCard, selectedBooster }) => {
  const sanitizedCardName = selectedCard.cardName
    .replace(/[:/\\?%*"<>|]/g, "")
    .replace(/#/g, "%23");
  const [imgSrc, setImgSrc] = useState(
    `/images/cards-1/${sanitizedCardName}_${selectedBooster.boosterPackCode}.jpg`
  );

  return (
    <div className="modal">
      <div className="modal__container">
        <p className="modal__close-button" onClick={onClose}>
          x
        </p>
        <p className="modal__title">Card Information</p>
        <div className="card-info__container">
          <img
            className="card-info__Image"
            src={imgSrc}
            alt={selectedCard.cardName}
            onError={() => setImgSrc(defaultCardImage)}
          />
          <ul className="card-info__list">
            <li className="card-info__list-label">
              Code:
              <span className="card-info__list-item">
                {selectedCard.cardCode}
              </span>
            </li>
            <li className="card-info__list-label">
              Name:
              <span className="card-info__list-item">
                {selectedCard.cardName}
              </span>
            </li>
            <li className="card-info__list-label">
              Rarity:
              <span className="card-info__list-item">
                {selectedCard.cardRarity}
              </span>
            </li>
            <li className="card-info__list-label">
              Card Type:
              <span className="card-info__list-item">
                {selectedCard.cardType}
              </span>
            </li>
            <li className="card-info__list-label">
              Types:
              <span className="card-info__list-item">
                {selectedCard.cardRace}/{selectedCard.cardTypes}
              </span>
            </li>
            <li className="card-info__list-label">
              Attribute:
              <span className="card-info__list-item">
                {selectedCard.cardAttribute}
              </span>
            </li>
            <li className="card-info__list-label">
              Level:
              <span className="card-info__list-item">
                {selectedCard.cardLevel}
              </span>
            </li>
            <li className="card-info__list-label">
              ATK / DEF:
              <span className="card-info__list-item">
                {selectedCard.cardAtk} / {selectedCard.cardDef}
              </span>
            </li>
            <li className="card-info__list-label">
              Description:
              <p className="card-info__list-item_description">
                {selectedCard.cardDescription}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardInfoModal;
