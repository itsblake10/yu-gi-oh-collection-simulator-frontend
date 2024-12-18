import "./FormInput.css";

const FormInput = ({ input, inputValue, handleChange }) => {
  const isInvalid = !!input.errorMessage;

  return (
    <>
      <label className="modal__label">
        {input.label}
        <input
          id={input.id}
          className={`modal__input ${isInvalid ? "modal__input_invalid" : ""}`}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
          value={inputValue || ""}
          minLength={input.minLength}
          maxLength={input.maxLength}
          required={input.required}
          onChange={handleChange}
        />
        {input.errorMessage && (
          <span className="modal__error">{input.errorMessage}</span>
        )}
      </label>
    </>
  );
};

export default FormInput;
