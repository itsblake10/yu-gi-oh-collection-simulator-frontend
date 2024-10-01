import "./ModalWithForm.css";
import closeIcon from "../../images/close-icon.svg";

const ModalWithForm = ({ onClose, title, children, name, buttonText }) => {
  return (
    <div className="modal">
      <div className="modal__container">
        <img
          className="modal__close-button"
          src={closeIcon}
          alt="close Button"
          onClick={onClose}
        />
        <p className="modal__title">{title}</p>
        <form className="modal__form" name={name}>
          {children}
        </form>
        <button className="modal__button">{buttonText}</button>
      </div>
    </div>
  );
};

export default ModalWithForm;
