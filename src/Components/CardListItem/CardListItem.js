import "./CardListItem.css";
import defaultCardImage from "../../images/blank-card.svg";
import { useState } from "react";

const CardListItem = ({ item, onClickCard, selectedBooster }) => {
  const sanitizedCardName = item.cardName
    .replace(/[:/\\?%*"<>|]/g, "")
    .replace(/#/g, "%23");
  const [imgSrc, setImgSrc] = useState(
    `/images/cards-1/${sanitizedCardName}_${selectedBooster.boosterPackCode}.jpg?`
  );

  const shouldScroll = sanitizedCardName.length > 14;
  const shouldScrollRarity = item.cardRarity.length > 16;

  return (
    <li className="cardlist__item">
      <p
        className={`cardlist__item-name ${
          !shouldScroll ? "non-scrolling" : ""
        }`}
      >
        <span>{item.cardName}</span>
      </p>
      <p className="cardlist__item-code">{item.cardCode}</p>
      <button
        className="cardlist__item-open-button"
        type="button"
        onClick={() => onClickCard(item)}
      >
        <img
          className="cardlist__item-image"
          src={imgSrc}
          alt={item.cardName}
          onError={() => {
            setImgSrc(defaultCardImage);
          }}
        />
        <p className="cardlist__item-image-text">MORE INFO</p>
      </button>
      <p
        className={`cardlist__item-rarity cardlist__item-rarity_${item.cardRarity
          .toLowerCase()
          .replace(/[-'()]/g, "")
          .replace(/ /g, "-")} ${!shouldScrollRarity ? "non-scrolling" : ""}`}
      >
        <span>{item.cardRarity}</span>
      </p>
    </li>
  );
};

export default CardListItem;
