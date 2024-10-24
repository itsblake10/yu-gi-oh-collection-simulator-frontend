import "./ItemBooster.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import defaultBooster from "../../images/default-booster.jpg";

const ItemBooster = ({ item, onClickBoosterPack }) => {
  const sanitizedSetName = item.boosterPackName.replace(/[:/\\?%*|"<>]/g, "");
  const [imgSrc, setImgSrc] = useState(
    `/images/booster-packs-1/${sanitizedSetName}.jpg`
  );

  const isDefaultBooster = imgSrc === defaultBooster;

  const shouldScroll = sanitizedSetName.length > 25;

  return (
    <>
      <li className="home__grid-item">
        <p className={`item__name ${!shouldScroll ? "non-scrolling" : ""}`}>
          <span>{item.boosterPackName}</span>
        </p>
        <p className="item__code">({item.boosterPackCode})</p>
        <p className="item__release">{item.boosterPackReleaseDate}</p>
        <NavLink
          className="item__link"
          to={`/booster-page/${item.boosterPackName}`}
        >
          <button
            className="item__open-button"
            type="button"
            onClick={() => onClickBoosterPack(item)}
            disabled={isDefaultBooster}
          >
            <img
              className="item__image"
              src={imgSrc}
              alt={item.boosterPackName}
              onError={() => setImgSrc(defaultBooster)}
              loading="lazy"
            />
            <p className="item__image-text">OPEN</p>
          </button>
        </NavLink>
        <p className="item__pack-size">{item.boosterPackSize} Cards</p>
      </li>
    </>
  );
};

export default ItemBooster;
