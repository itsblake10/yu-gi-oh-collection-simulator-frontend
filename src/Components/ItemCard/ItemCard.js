import "./ItemCard.css";
import defaultCardImage from "../../images/blank-card.svg";
import { useState } from "react";

const ItemCard = ({ item, onClickCardInfo }) => {
  const sanitizedCardName = item.cardName.replace(/[:/\\?%*|"<>]/g, "");
  const [imgSrc, setImgSrc] = useState();
  // const [imgSrc, setImgSrc] = useState(
  //   `https://res.cloudinary.com/dsvu6oqd2/image/upload/v1736345586/${sanitizedSetName}_${selectedBooster.set_code}.jpg`
  // );
  // `/images/cards-1/${sanitizedCardName}_${selectedBooster.set_code}.jpg`

  return (
    <li className="item__card">
      <p className="item__card-name">{item.cardName}</p>
      <p className="item__card-code">{item.code}lob-123</p>
      <button
        className="item__card-open-button"
        type="button"
        onClick={onClickCardInfo}
      >
        <img
          className="item__card-image"
          alt={item.cardName}
          src={defaultCardImage}
          onError={() => setImgSrc(defaultCardImage)}
        />
        <p className="item__card-image-text">MORE INFO</p>
      </button>
    </li>
  );
};

export default ItemCard;
