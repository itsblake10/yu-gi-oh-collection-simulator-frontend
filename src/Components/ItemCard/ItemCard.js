import "./ItemCard.css";

const ItemCard = ({ item }) => {
  return (
    <li class="booster__modal-cardlist-item">
      <img
        class="booster__modal-cardlist-image"
        src={item.cardImage}
        alt={item.name}
      />
    </li>
  );
};

export default ItemCard;
