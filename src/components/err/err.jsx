// react redux types
import React from "react";
import PropTypes from "prop-types";

//styles
import styles from "./err.module.css";

const Err = ({ text }) => {

  return (
    <div className={`${styles.container} mt-20 mb-20`}>
      <h2 className="text text_type_main-large">{text}</h2>
    </div>);
};

Err.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Err;