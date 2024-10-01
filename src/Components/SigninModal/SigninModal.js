import "./SigninModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SigninModal = ({ onClose, buttonText }) => {
  return (
    <ModalWithForm
      title="Sign In"
      name="Login-user"
      buttonText={buttonText}
      onClose={onClose}
    >
      <fieldset className="modal__inputs">
        <label className="modal__label">
          Username:
          <input
            className="modal__input"
            type="text"
            name="username"
            placeholder="Username"
            // value={userName}
            minLength="3"
            maxLength="20"
            // onChange={handleNameChange}
          />
        </label>
        <label className="modal__label">
          Password:
          <input
            className="modal__input"
            type="password"
            name="password"
            placeholder="Password"
            // value={userPassword}
            minLength="5"
            maxLength="1000"
            // onChange={handlePasswordChange}
          />
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default SigninModal;
