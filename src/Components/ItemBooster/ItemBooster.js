import "./ItemBooster.css";
import { Link } from "react-router-dom";

const ItemBooster = ({ item }) => {
  return (
    <li className="home__grid-item">
      <p className="item__name">{item.name}</p>
      <p className="item__code">{item.code}</p>
      <p className="item__release">{item.releaseDate}</p>
      <Link to={`/booster-page/${item._id}`}>
        <button className="item__open-button" type="button">
          <img
            className="item__image"
            src={item.boosterImage}
            alt={item.name}
          />
          <p className="item__image-text">OPEN</p>
        </button>
      </Link>
    </li>
  );
};

export default ItemBooster;
