import "./SigninModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormValidation } from "../../hooks/useFormValidation";
import FormInput from "../FormInput/FormInput";

const SigninModal = ({ onClose, buttonText }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormValidation({
      username: "",
      password: "",
    });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username...",
      errorMessage: errors.username,
      label: "Username:",
      minLength: 3,
      maxLength: 20,
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password...",
      errorMessage: errors.password,
      label: "Password:",
      minLength: 8,
      required: true,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      console.log(values);
      resetForm();
      onClose();
    }
  };

  return (
    <ModalWithForm
      title="Sign In"
      name="Login-user"
      buttonText={buttonText}
      onClose={onClose}
      handleSubmit={handleSubmit}
      isValid={isValid}
    >
      <fieldset className="modal__inputs">
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            input={input}
            inputValue={values[input.name] || ""}
            handleChange={handleChange}
          />
        ))}
      </fieldset>
    </ModalWithForm>
  );
};

export default SigninModal;
