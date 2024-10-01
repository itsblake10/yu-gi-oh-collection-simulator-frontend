import "./ModalWithText.css";
import closeIcon from "../../images/close-icon.svg";

const ModalWithText = ({ onClose, title, children }) => {
  return (
    <div className="modal">
      <div className="modal__container">
        <img
          className="modal__close-button"
          src={closeIcon}
          alt="close Button"
          onClick={onClose}
        />
        <h1 className="modal__title">{title}</h1>
        <div className="modal__text-container">{children}</div>
      </div>
    </div>
  );
};

export default ModalWithText;
