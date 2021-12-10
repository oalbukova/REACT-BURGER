// react redux types
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//components
import ModalOverlay from "../modal-overlay/modal-overlay";

// ui-components
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

//styles
import styles from "./modal.module.css";

const modalRoot = document.getElementById("modals");

const Modal = (props) => {
  const { handleClose, children } = props;

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    const handlerOverlayClick = (e) => {
      if (e.target.classList.contains("modalOverlay")) {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEscClose);
    window.addEventListener("mousedown", handlerOverlayClick);

    return () => {
      window.removeEventListener("keydown", handleEscClose);
      window.removeEventListener("mousedown", handlerOverlayClick);
    };
  }, [handleClose]);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay />
      <div className={`${styles.modal} pt-10 pl-10 pr-10 pb-15`}>
        <div className={styles.close}>
          <CloseIcon type="primary" onClick={handleClose} />
        </div>
        {children}
      </div>
    </>,
    modalRoot
  )
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default Modal;
