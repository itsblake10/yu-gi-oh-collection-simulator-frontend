import "./ItemBooster.css";
import { NavLink } from "react-router-dom";

const ItemBooster = ({ item, onClickBoosterPack }) => {
  const imagePath = `/images/booster-packs/${item.set_name}.png`;

  return (
    <li className="home__grid-item">
      <p className="item__name">{item.set_name}</p>
      <p className="item__code">({item.set_code})</p>
      <p className="item__release">{item.tcg_date}</p>
      <NavLink className="item__link" to={`/booster-page/${item.set_name}`}>
        <button
          className="item__open-button"
          type="button"
          onClick={() => onClickBoosterPack(item)}
        >
          <img className="item__image" src={imagePath} alt={item.set_name} />
          <p className="item__image-text">OPEN</p>
        </button>
      </NavLink>
      <p className="item__pack-size">{item.num_of_cards} Cards</p>
    </li>
  );
};

export default ItemBooster;
