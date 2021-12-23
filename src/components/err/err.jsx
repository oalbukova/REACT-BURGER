// react redux types
import React from "react";
import { useSelector } from "react-redux";

//styles
import styles from "./err.module.css";

const Err = () => {
  const { error } = useSelector((state) => state.cart);

  return (
    <div className={`${styles.container} mt-20 mb-20`}>
      <h2 className="text text_type_main-large">
        Ошибка выполнения запроса: {error}
      </h2>
    </div>
  );
};

export default Err;
