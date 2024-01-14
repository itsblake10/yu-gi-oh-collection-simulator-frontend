import "./ItemBooster.css";

const ItemBooster = ({ item, onSelectBooster }) => {
  return (
    <li className="home__grid-item">
      <p className="item__name">{item.name}</p>
      <p className="item__code">{item.code}</p>
      <p className="item__release">{item.releaseDate}</p>
      <button
        className="item__open-button"
        type="button"
        onClick={() => onSelectBooster(item)}
      >
        <img className="item__image" src={item.boosterImage} alt={item.name} />
        <p className="item__image-text">OPEN</p>
      </button>
    </li>
  );
};

export default ItemBooster;
