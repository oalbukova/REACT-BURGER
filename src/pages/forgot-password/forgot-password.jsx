// react redux types
import React, { useState } from "react";
import { Link } from "react-router-dom";

// styles
import styles from "./forgot-password.module.css";

// ui-components
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ForgotPasswordPage = () => {
  const [emailValue, setEmailValue] = useState("");

  const onChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <form className={`${styles.form}`}>
        <h1 className={`text text_type_main-medium mb-6`}>
          Восстановление пароля
        </h1>
        <EmailInput
          onChange={onChangeEmail}
          value={emailValue}
          name={"email"}
        />

        <div className={`${styles.container}`}>
          <Button type="primary" size="medium">
            Восстановить
          </Button>
        </div>
        <p className="text text_type_main-default text_color_inactive mb-4">
          Вспомнили пароль?
          <Link to="/login" className={`${styles.link} ml-2`}>Войти</Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
