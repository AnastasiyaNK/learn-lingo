import { useEffect } from "react";
import { StyledModal } from "./Modal.styled";
import IconClose from "assets/images/x-close.svg?react";

const Modal = ({ closeModal, children, title, text }) => {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscapeClick = (event) => {
      if (event.code === "Escape") {
        closeModal();
      }
    };

    document.body.style.overflowY = "hidden";
    window.addEventListener("keydown", handleEscapeClick);

    return () => {
      window.removeEventListener("keydown", handleEscapeClick);
      document.body.style.overflowY = "visible";
    };
  }, [closeModal]);
  return (
    <StyledModal onClick={handleOverlayClick}>
      <div className="modal">
        <button className="closeBtn" onClick={closeModal}>
          <IconClose />
        </button>
        <h2 className="modalTitle">{title}</h2>
        <p className="modalText">{text}</p>
        {children}
      </div>
    </StyledModal>
  );
};

export default Modal;
