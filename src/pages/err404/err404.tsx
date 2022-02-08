import React from "react";
import { Link } from "react-router-dom";

import styles from "./err404.module.css";

const NotFound404 = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className="text text_type_main-large text_color_inactive pb-20">
            Упс! Ошибка 404
          </h1>
          <p className="text text_type_main-medium text_color_inactive">
            Запрошенная вами страница не существует &#128579;
          </p>
          <br />
          <br />
          <p className="text text_type_main-medium text_color_inactive">
            проверьте адрес или перейдите на{" "}
            <Link
              to={{ pathname: "/" }}
              className={`${styles.link} text text_type_main-medium`}
            >
              домашнюю страницу
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
