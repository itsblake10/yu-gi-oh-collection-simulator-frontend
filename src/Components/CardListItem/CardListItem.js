import "./CardListItem.css";
import defaultCardImage from "../../images/blank-card.svg";
import { useState } from "react";

const CardListItem = ({ item, onClickCard, selectedBooster }) => {
  const sanitizedCardName = item.cardName.replace(/[:/\\?%*|"<>]/g, "");
  const [imgSrc, setImgSrc] = useState(
    `/images/cards-1/${sanitizedCardName}_${selectedBooster.boosterPackCode}.jpg`
  );

  // let cardCode = "";
  // let cardRarity = "";

  // const cardSet = item.cardSets.find(
  //   (set) => set.set_name === selectedBooster.boosterPackName
  // );

  // if (cardSet) {
  //   cardCode = cardSet.set_code;
  //   cardRarity = cardSet.set_rarity;
  // } else {
  //   console.error("Card set not found for", selectedBooster.set_name);
  // }

  const shouldScroll = sanitizedCardName.length > 14;
  const shouldScrollRarity = item.cardRarity.length > 17;

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
          onError={() => setImgSrc(defaultCardImage)}
        />
        <p className="cardlist__item-image-text">MORE INFO</p>
      </button>
      <p
        className={`cardlist__item-rarity ${
          !shouldScrollRarity ? "non-scrolling" : ""
        }`}
      >
        <span>{item.cardRarity}</span>
      </p>
    </li>
  );
};

export default CardListItem;
