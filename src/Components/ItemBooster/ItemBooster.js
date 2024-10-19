import "./ItemBooster.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { boosterPackData } from "../../utils/BoosterPacks";
import defaultBooster from "../../images/default-booster.jpg";

const ItemBooster = ({ item, onClickBoosterPack }) => {
  const sanitizedSetName = item.set_name.replace(/[:/\\?%*|"<>]/g, "");
  const [imgSrc, setImgSrc] = useState(
    `/images/booster-packs-1/${sanitizedSetName}.jpg`
  );

  const packSize = boosterPackData[item.set_code]?.packSize || "???";

  const isDefaultBooster = imgSrc === defaultBooster;

  const shouldScroll = sanitizedSetName.length > 25;

  return (
    <>
      <li className="home__grid-item">
        <p className={`item__name ${!shouldScroll ? "non-scrolling" : ""}`}>
          <span>{item.set_name}</span>
        </p>
        <p className="item__code">({item.set_code})</p>
        <p className="item__release">{item.tcg_date}</p>
        <NavLink className="item__link" to={`/booster-page/${item.set_name}`}>
          <button
            className="item__open-button"
            type="button"
            onClick={() => onClickBoosterPack(item)}
            disabled={isDefaultBooster}
          >
            <img
              className="item__image"
              src={imgSrc}
              alt={item.set_name}
              onError={() => setImgSrc(defaultBooster)}
              loading="lazy"
            />
            <p className="item__image-text">OPEN</p>
          </button>
        </NavLink>
        <p className="item__pack-size">{packSize} Cards</p>
      </li>
    </>
  );
};

export default ItemBooster;
