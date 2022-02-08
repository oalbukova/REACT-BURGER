// react redux types
import React, { FC, useEffect } from "react";
import ReactDOM from "react-dom";

//components
import ModalOverlay from "../modal-overlay/modal-overlay";

// ui-components
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

//styles
import styles from "./modal.module.css";

const modalRoot = document.getElementById("modals") as HTMLElement;

type TModal = {
  handleClose: () => void;
  children: JSX.Element;
};

const Modal: FC<TModal> = ({ handleClose, children }) => {
  useEffect(() => {
    const handleEscClose = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    const handlerOverlayClick = ({ target }: MouseEvent) => {
      const targetDivElement: HTMLDivElement = target as HTMLDivElement;
      if (targetDivElement.classList.contains("modalOverlay")) {
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
  );
};

export default Modal;
