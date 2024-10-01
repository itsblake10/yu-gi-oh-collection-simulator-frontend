import "./ChangeEmailModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const ChangeEmailModal = ({ onClose, buttonText }) => {
  return (
    <ModalWithForm
      title="Change Email"
      name="change-email"
      buttonText={buttonText}
      onClose={onClose}
    >
      <div className="modal__existing-email-container">
        <p className="modal__text">Existing Email:</p>
        <p className="modal__existing-email">example@gmail.com</p>
      </div>
      <fieldset className="modal__inputs">
        <label className="modal__label">
          New Email:
          <input
            className="modal__input"
            type="email"
            name="email"
            placeholder="Email..."
            // value={userName}
            minLength="3"
            maxLength="20"
            // onChange={handleNameChange}
          />
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default ChangeEmailModal;
