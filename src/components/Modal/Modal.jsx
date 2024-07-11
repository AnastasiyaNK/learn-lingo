import { useEffect, useRef } from "react";
import { StyledModal } from "./Modal.styled";
import IconClose from "assets/images/x-close.svg?react";

const Modal = ({ closeModal, children, title, text }) => {
  const modalRef = useRef(null)

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    if (modalRef.current !== null) {
      modalRef.current.focus();
    }

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
    <StyledModal  onClick={handleOverlayClick}>
      <div ref={modalRef} className="modal">
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
