import "./SignupModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SignupModal = ({ onClose, buttonText }) => {
  return (
    <ModalWithForm
      title="Sign-Up"
      name="register-user"
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
          Email:
          <input
            className="modal__input"
            type="email"
            name="email"
            placeholder="Email"
            // value={userEmail}
            minLength="5"
            maxLength="50"
            // onChange={handleEmailChange}
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
        <label className="modal__label">
          Confirm Password:
          <input
            className="modal__input"
            type="password"
            name="confirm-password"
            placeholder="Confirm Password"
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

export default SignupModal;
