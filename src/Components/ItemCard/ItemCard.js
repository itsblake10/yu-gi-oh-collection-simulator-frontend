import "./ItemCard.css";
import defaultCardImage from "../../images/blank-card.svg";
import { useState } from "react";

const ItemCard = ({ item, onClickCardInfo }) => {
  const sanitizedCardName = item.name.replace(/[:/\\?%*|"<>]/g, "");
  const [imgSrc, setImgSrc] = useState();
  // `/images/cards-1/${sanitizedCardName}_${selectedBooster.set_code}.jpg`

  // let cardCode = "";
  // let cardRarity = "";

  // const cardSet = item.card_sets.find(
  //   (set) => set.set_name === selectedBooster.set_name
  // );

  // if (cardSet) {
  //   cardCode = cardSet.set_code;
  //   cardRarity = cardSet.set_rarity;
  // } else {
  //   console.error("Card set not found for", selectedBooster.set_name);
  // }

  return (
    <li className="item__card">
      <p className="item__card-name">{item.name}</p>
      <p className="item__card-code">{item.code}lob-123</p>
      <button
        className="item__card-open-button"
        type="button"
        onClick={onClickCardInfo}
      >
        <img
          className="item__card-image"
          alt={item.name}
          src={defaultCardImage}
          onError={() => setImgSrc(defaultCardImage)}
        />
        <p className="item__card-image-text">MORE INFO</p>
      </button>
    </li>
  );
};

export default ItemCard;
