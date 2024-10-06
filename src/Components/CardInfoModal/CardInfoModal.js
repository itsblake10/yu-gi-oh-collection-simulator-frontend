import "./CardInfoModal.css";
import closeIcon from "../../images/close-icon.svg";
import Armaill from "../../images/temp/Armaill.jpg";

const CardInfoModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal__container">
        <img
          className="modal__close-button"
          src={closeIcon}
          alt="close Button"
          onClick={onClose}
        />
        <p className="modal__title">Card Information</p>
        <div className="card-info__container">
          <img
            className="card-info__Image"
            src={Armaill}
            // alt={item.name}
          />
          <ul className="card-info__list">
            <li className="card-info__list-label">
              Code:<span className="card-info__list-item">LOB-002</span>
            </li>
            <li className="card-info__list-label">
              Name:
              <span className="card-info__list-item">
                Blue eyes White Dragon
              </span>
            </li>
            <li className="card-info__list-label">
              Rarity:<span className="card-info__list-item">Ultra Rare</span>
            </li>
            <li className="card-info__list-label">
              Card Type:<span className="card-info__list-item">Monster</span>
            </li>
            <li className="card-info__list-label">
              Types:
              <span className="card-info__list-item">
                Dragon/Normal Monster
              </span>
            </li>
            <li className="card-info__list-label">
              Attribute:<span className="card-info__list-item">Light</span>
            </li>
            <li className="card-info__list-label">
              Level:<span className="card-info__list-item">8</span>
            </li>
            <li className="card-info__list-label">
              ATK / DEF:
              <span className="card-info__list-item">3000 / 2500</span>
            </li>
            <li className="card-info__list-label">
              Description:
              <p className="card-info__list-item_description">
                dfgdfg dfgdfg dfg dfg df gfgsdf sdfsdfsdfsdfsdfsdf dfgdfg dfg
                dfg df dfgdfg dfg dfg df gfgsdf sdfsdfsdfsdfsdfsdf dfgdfg dfg
                dfg df dfg dfg df gfgsdf sdfsdfsdfsdfsdfsdf dfgdfg dfg dfg df
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardInfoModal;
