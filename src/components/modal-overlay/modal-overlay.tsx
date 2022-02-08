// react redux types
import React from "react";

//styles
import styles from "./modal-overlay.module.css";

const ModalOverlay = (): JSX.Element => {
  return <div className={`modalOverlay ${styles.modalOverlay}`} />;
};

export default ModalOverlay;
