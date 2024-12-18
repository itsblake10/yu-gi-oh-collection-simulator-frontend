import "./ModalWithForm.css";

const ModalWithForm = ({
  onClose,
  title,
  children,
  name,
  buttonText,
  handleSubmit,
  isValid,
}) => {
  return (
    <div className="modal">
      <div className="modal__container">
        <p className="modal__close-button" onClick={onClose}>
          x
        </p>
        <p className="modal__title">{title}</p>
        <form className="modal__form" name={name} onSubmit={handleSubmit}>
          {children}
        </form>
        <button
          className="modal__button"
          disabled={!isValid}
          onClick={handleSubmit}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ModalWithForm;
