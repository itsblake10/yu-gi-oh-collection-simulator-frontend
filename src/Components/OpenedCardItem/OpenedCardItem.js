import "./OpenedCardItem.css";
import defaultCardImage from "../../images/blank-card.svg";
import LoadingAnimationTwo from "../LoadingAnimationTwo/LoadingAnimationTwo";
import { useEffect, useState } from "react";

const OpenedCardItem = ({ item, onClickCard }) => {
  const sanitizedCardName = item.cardName
    .replace(/[:/\\?%*"<>|]/g, "")
    .replace(/#/g, "%23");
  const [imgSrc, setImgSrc] = useState(item.imageUrl || { defaultCardImage });
  const [isCardLoading, setIsCardLoading] = useState(false);
  const [cardClass, setCardClass] = useState("opened-card__container_hidden");

  useEffect(() => {
    setImgSrc(item.imageUrl || defaultCardImage);
  }, [item.imageUrl]);

  useEffect(() => {
    if (cardClass === "opened-card__container_hidden") {
      setIsCardLoading(true);
    } else {
      setIsCardLoading(false);
    }
  }, [item.imageUrl, cardClass]);

  const handleOpenedCardLoad = () => {
    setIsCardLoading(false);
    setCardClass("");
  };

  const shouldScroll = sanitizedCardName.length > 16;
  const shouldScrollRarity = item.cardRarity.length > 17;

  return (
    <>
      {isCardLoading && <LoadingAnimationTwo />}
      <div className={`opened-card__container ${cardClass}`}>
        <p
          className={`opened-card__name ${
            !shouldScroll ? "non-scrolling" : ""
          }`}
        >
          <span>{item.cardName}</span>
        </p>
        <p className="opened-card__code">{item.cardCode}</p>
        <button
          className="opened-card__button"
          type="button"
          onClick={() => onClickCard(item)}
        >
          <img
            className="opened-card__image"
            src={imgSrc}
            alt={item.cardName}
            onLoad={handleOpenedCardLoad}
            onError={() => setImgSrc(defaultCardImage)}
          />
          <p className="opened-card__image-text">MORE INFO</p>
        </button>
        <p
          className={`opened-card__rarity opened-card__rarity_${item.cardRarity
            .toLowerCase()
            .replace(/-/g, "")
            .replace(/ /g, "-")} ${
            !shouldScrollRarity ? "non-scrolling" : ""
          } ${!shouldScrollRarity ? "non-scrolling" : ""}`}
        >
          <span>{item.cardRarity}</span>
        </p>
      </div>
    </>
  );
};

export default OpenedCardItem;
