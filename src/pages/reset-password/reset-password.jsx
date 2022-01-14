// react redux types
import React, { useState } from "react";
import { Link } from "react-router-dom";

// styles
import styles from "./reset-password.module.css";

// ui-components
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ResetPasswordPage = () => {
  const [codeValue, setCodeValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const onChangeCode = (e) => {
    setCodeValue(e.target.value);
  };

  const onChangePassword = (e) => {
    setPasswordValue(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <form className={`${styles.form}`}>
        <h1 className={`text text_type_main-medium mb-6`}>
          Восстановление пароля
        </h1>
        <PasswordInput
          onChange={onChangePassword}
          value={passwordValue}
          name={"password"}
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={onChangeCode}
          value={codeValue}
          name={"code"}
          error={false}
          errorText={"Ошибка"}
        />

        <div className={`${styles.container}`}>
          <Button type="primary" size="medium">
            Сохранить
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

export default ResetPasswordPage;
