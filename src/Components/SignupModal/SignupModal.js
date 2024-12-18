import "./SignupModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import FormInput from "../FormInput/FormInput";
import { useFormValidation } from "../../hooks/useFormValidation";

const SignupModal = ({ onClose, buttonText }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormValidation({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
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
      name: "email",
      type: "email",
      placeholder: "Email...",
      errorMessage: errors.email,
      label: "Email:",
      minLength: 3,
      maxLength: 256,
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password...",
      errorMessage: errors.password,
      label: "Password:",
      minLength: 8,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password...",
      errorMessage: errors.confirmPassword,
      label: "Confirm Password:",
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
      title="Sign Up"
      name="register-user"
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

export default SignupModal;
