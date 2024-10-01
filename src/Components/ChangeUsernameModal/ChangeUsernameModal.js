import "./ChangeUsernameModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const ChangeUsernameModal = ({ onClose, buttonText }) => {
  return (
    <ModalWithForm
      title="Change Username"
      name="change-username"
      buttonText={buttonText}
      onClose={onClose}
    >
      <fieldset className="modal__inputs">
        <label className="modal__label">
          New Username:
          <input
            className="modal__input"
            type="text"
            name="username"
            placeholder="Username..."
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

export default ChangeUsernameModal;
