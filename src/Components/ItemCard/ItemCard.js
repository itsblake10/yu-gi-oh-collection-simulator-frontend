import "./ItemCard.css";

const ItemCard = ({ item }) => {
  return (
    <li className="booster__modal-cardlist-item">
      <img
        className="booster__modal-cardlist-image"
        src={item.cardImage}
        alt={item.name}
      />
    </li>
  );
};

export default ItemCard;
