import "./ModalWithForm.css";
import closeIcon from "../../images/close-icon.svg";

const ModalWithForm = ({ onClose, title, children, name, buttonText }) => {
  return (
    <div className="modal modal__form">
      <div className="modal__form-container">
        <img
          className="modal__form-close-button"
          src={closeIcon}
          alt="close Button"
          onClick={onClose}
        />
        <p className="modal__form-title">{title}</p>
        <form className="modal__form-form" name={name}>
          {children}
        </form>
        <button className="modal__form-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default ModalWithForm;
