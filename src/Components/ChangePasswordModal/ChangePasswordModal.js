import "./ChangePasswordModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const ChangePasswordModal = ({ onClose, buttonText }) => {
  return (
    <ModalWithForm
      title="Change Password"
      name="change-password"
      buttonText={buttonText}
      onClose={onClose}
    >
      <fieldset className="modal__inputs">
        <label className="modal__label">
          Current Password:
          <input
            className="modal__input"
            type="password"
            name="password"
            placeholder="Current Password..."
            // value={userName}
            minLength="3"
            maxLength="20"
            // onChange={handleNameChange}
          />
        </label>
        <label className="modal__label">
          New Password:
          <input
            className="modal__input"
            type="password"
            name="password"
            placeholder="New Password..."
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

export default ChangePasswordModal;
