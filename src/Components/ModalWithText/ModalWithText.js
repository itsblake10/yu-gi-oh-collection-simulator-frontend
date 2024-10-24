import "./ModalWithText.css";

const ModalWithText = ({ onClose, title, children }) => {
  return (
    <div className="modal">
      <div className="modal__container">
        <p className="modal__close-button" onClick={onClose}>
          x
        </p>
        <h1 className="modal__title">{title}</h1>
        <div className="modal__text-container">{children}</div>
      </div>
    </div>
  );
};

export default ModalWithText;
