import "./ItemCard.css";

const ItemCard = ({ item, onClickCardInfo, selectedBooster }) => {
  const imagePath = `/images/cards/${selectedBooster.set_code}/${item.name}.jpg`;

  return (
    <li className="cardlist__item">
      <p className="cardlist__item-name">{item.name}</p>
      <p className="cardlist__item-code">{item.code}</p>
      <button
        className="cardlist__item-open-button"
        type="button"
        onClick={onClickCardInfo}
      >
        <img className="cardlist__item-image" src={imagePath} alt={item.name} />
        <p className="cardlist__item-image-text">MORE INFO</p>
      </button>
    </li>
  );
};

export default ItemCard;
