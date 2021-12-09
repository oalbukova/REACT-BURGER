// react redux types
import React from "react";
//import PropTypes from "prop-types";

//styles
import styles from "./modal-overlay.module.css";

type Props = {
  children: React.ReactElement;
};

const ModalOverlay = (props: Props) => {
  const {children} = props;

  return (
    <div className={`modalOverlay ${styles.modalOverlay}`}  >
      {children}
    </div>
  );
};

export default ModalOverlay;
