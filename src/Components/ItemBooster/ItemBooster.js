import "./ItemBooster.css";
import { NavLink } from "react-router-dom";

const ItemBooster = ({ item }) => {
  return (
    <li className="home__grid-item">
      <p className="item__name">{item.name}</p>
      <p className="item__code">({item.code})</p>
      <p className="item__release">{item.releaseDate}</p>
      <NavLink className="item__link" to={`/booster-page/${item._id}`}>
        <button className="item__open-button" type="button">
          <img
            className="item__image"
            src={item.boosterImage}
            alt={item.name}
          />
          <p className="item__image-text">OPEN</p>
        </button>
      </NavLink>
      <p className="item__pack-size">{item.packSize} Cards</p>
    </li>
  );
};

export default ItemBooster;
