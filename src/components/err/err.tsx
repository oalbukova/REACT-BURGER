// react redux types
import React from "react";
import { useSelector } from "../../services/hooks";

//styles
import styles from "./err.module.css";

const Err = (): JSX.Element => {
  const { error } = useSelector((state) => state.modalReducer);

  return (
    <div className={`${styles.container} mt-20 mb-20`}>
      <h2 className="text text_type_main-large text_color_inactive">
        Ошибка выполнения запроса: {error}
      </h2>
    </div>
  );
};

export default Err;
