import "./ModalWithText.css";
import closeIcon from "../../images/close-icon.svg";

const ModalWithText = ({ onClose, title }) => {
  return (
    <div className="modal text__modal">
      <div className="text__modal-container">
        <img
          className="text__modal-close-button"
          src={closeIcon}
          alt="close Button"
          onClick={onClose}
        />
        <h1 className="text__modal-title">{title}</h1>
        <p className="text__modal-text"></p>
      </div>
    </div>
  );
};

export default ModalWithText;
