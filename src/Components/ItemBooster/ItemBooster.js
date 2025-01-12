import "./ItemBooster.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import defaultBooster from "../../images/default-booster.jpg";

const ItemBooster = ({ item, onClickBoosterPack }) => {
  const sanitizedSetName = item.boosterPackName.replace(/[:/\\?%*|"<>]/g, "");

  const multipleArtBoosterPackImages = useMemo(() => {
    if (sanitizedSetName === "Ghosts From the Past The 2nd Haunting") {
      return [
        `https://res.cloudinary.com/dsvu6oqd2/image/upload/v1736345586/${sanitizedSetName}1.jpg`,
        `https://res.cloudinary.com/dsvu6oqd2/image/upload/v1736345586/${sanitizedSetName}2.jpg`,
        `https://res.cloudinary.com/dsvu6oqd2/image/upload/v1736345586/${sanitizedSetName}3.jpg`,
        `https://res.cloudinary.com/dsvu6oqd2/image/upload/v1736345586/${sanitizedSetName}4.jpg`,
      ];
    } else {
      return [
        `https://res.cloudinary.com/dsvu6oqd2/image/upload/v1736345586/${sanitizedSetName}1.jpg`,
        `https://res.cloudinary.com/dsvu6oqd2/image/upload/v1736345586/${sanitizedSetName}2.jpg`,
        `https://res.cloudinary.com/dsvu6oqd2/image/upload/v1736345586/${sanitizedSetName}3.jpg`,
        `https://res.cloudinary.com/dsvu6oqd2/image/upload/v1736345586/${sanitizedSetName}4.jpg`,
        `https://res.cloudinary.com/dsvu6oqd2/image/upload/v1736345586/${sanitizedSetName}5.jpg`,
      ];
    }
  }, [sanitizedSetName]);

  const [imgSrc, setImgSrc] = useState(
    `https://res.cloudinary.com/dsvu6oqd2/image/upload/v1736345586/${sanitizedSetName}.jpg`
    // `/images/booster-packs-1/${sanitizedSetName}.jpg`
  );

  const isDefaultBooster = imgSrc === defaultBooster;

  const shouldScroll = sanitizedSetName.length > 25;

  useEffect(() => {
    if (
      sanitizedSetName === "Battles of Legend Monstrous Revenge" ||
      sanitizedSetName === "Battles of Legend Crystal Revenge" ||
      sanitizedSetName === "Ghosts From the Past The 2nd Haunting"
    ) {
      let index = 0;
      const intervalId = setInterval(() => {
        index = (index + 1) % multipleArtBoosterPackImages.length;
        setImgSrc(multipleArtBoosterPackImages[index]);
      }, 15000);

      return () => clearInterval(intervalId);
    }
  }, [sanitizedSetName, multipleArtBoosterPackImages]);

  return (
    <>
      <li className="home__grid-item">
        <p className={`item__name ${!shouldScroll ? "non-scrolling" : ""}`}>
          <span className="item__name-span">{item.boosterPackName}</span>
        </p>
        <p className="item__code">({item.boosterPackCode})</p>
        <p className="item__release">{item.boosterPackReleaseDate}</p>
        <NavLink
          className="item__link"
          to={`/booster-page/${item.boosterPackName}`}
        >
          <button
            className={`item__open-button ${
              isDefaultBooster ? "disabled" : ""
            }`}
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
