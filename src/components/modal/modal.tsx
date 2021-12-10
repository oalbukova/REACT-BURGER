// react redux types
import React from "react";
import ReactDOM from "react-dom";
//import PropTypes from "prop-types";

//components
import ModalOverlay from "../modal-overlay/modal-overlay";

// ui-components
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

//styles
import styles from "./modal.module.css";

type Props = {
  children: React.ReactElement;
  handleClose: () => void;
};

const Modal = (props: Props) => {
  const { handleClose, children } = props;
  const modalRoot = document.getElementById("modals")!;

  return ReactDOM.createPortal(
    <ModalOverlay>
      <div className={`${styles.modal} pt-10 pl-10 pr-10 pb-15`}>
        <div className={styles.close}>
          <CloseIcon type="primary" onClick={handleClose} />
        </div>
        {children}
      </div>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;
