import "./ChangeAvatarModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const ChangeAvatarModal = ({ onClose, buttonText }) => {
  return (
    <ModalWithForm
      title="Change Avatar"
      name="change-avatar"
      buttonText={buttonText}
      onClose={onClose}
    >
      <fieldset className="modal__inputs">
        <label className="modal__label">
          Image URL:
          <input
            className="modal__input"
            type="url"
            name="avatar"
            placeholder="Image URL..."
            // value={userName}
            minLength="5"
            maxLength="1000"
            // onChange={handleNameChange}
          />
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default ChangeAvatarModal;
