import "./CardListItem.css";
import defaultCardImage from "../../images/blank-card.svg";
import { useState } from "react";

const CardListItem = ({ item, onClickCard, selectedBooster }) => {
  const sanitizedCardName = item.name.replace(/[:/\\?%*|"<>]/g, "");
  const [imgSrc, setImgSrc] = useState(
    `/images/cards-1/${sanitizedCardName}_${selectedBooster.set_code}.jpg`
  );

  let cardCode = "";
  let cardRarity = "";

  const cardSet = item.card_sets.find(
    (set) => set.set_name === selectedBooster.set_name
  );

  if (cardSet) {
    cardCode = cardSet.set_code;
    cardRarity = cardSet.set_rarity;
  } else {
    console.error("Card set not found for", selectedBooster.set_name);
  }

  const shouldScroll = sanitizedCardName.length > 17;
  const shouldScrollRarity = cardRarity.length > 17;

  return (
    <li className="cardlist__item">
      <p
        className={`cardlist__item-name ${
          !shouldScroll ? "non-scrolling" : ""
        }`}
      >
        <span>{item.name}</span>
      </p>
      <p className="cardlist__item-code">{cardCode}</p>
      <button
        className="cardlist__item-open-button"
        type="button"
        onClick={() => onClickCard(item, cardCode, cardRarity)}
      >
        <img
          className="cardlist__item-image"
          src={imgSrc}
          alt={item.name}
          onError={() => setImgSrc(defaultCardImage)}
        />
        <p className="cardlist__item-image-text">MORE INFO</p>
      </button>
      <p
        className={`cardlist__item-rarity ${
          !shouldScrollRarity ? "non-scrolling" : ""
        }`}
      >
        <span>{cardRarity}</span>
      </p>
    </li>
  );
};

export default CardListItem;
