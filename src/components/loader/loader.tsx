// react redux
import React from "react";

// loader
import { BallTriangle } from "react-loader-spinner";

// styles
import styles from "./loader.module.css";

const Loader = (): JSX.Element => {
  return (
    <div className={styles.loader}>
      <BallTriangle color="#4c4cff" height={200} width={200} visible={true} />
    </div>
  );
};

export default Loader;
