import "./FormModal.css";
import closeIcon from "../../images/close-icon.svg";

const FormModal = ({ onClose, title }) => {
  return (
    <div className="modal form__modal">
      <div className="form__modal-container">
        <img
          className="form__modal-close-button"
          src={closeIcon}
          alt="close Button"
          onClick={onClose}
        />
        <h1 className="form__modal-title">{title}</h1>
        <form className="form__modal-form"></form>
      </div>
    </div>
  );
};

export default FormModal;
