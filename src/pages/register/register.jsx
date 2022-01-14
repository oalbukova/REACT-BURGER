// react redux types
import React, { useState } from "react";
import { Link } from "react-router-dom";

// styles
import styles from "./register.module.css";

// ui-components
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

const RegisterPage = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const onChangeName = (e) => {
    setNameValue(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };

  const onChangePassword = (e) => {
    setPasswordValue(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <form className={`${styles.form}`}>
        <h1 className={`text text_type_main-medium mb-6`}>Регистрация</h1>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={onChangeName}
          value={nameValue}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
        />
        <EmailInput
          onChange={onChangeEmail}
          value={emailValue}
          name={"email"}
        />
        <PasswordInput
          onChange={onChangePassword}
          value={passwordValue}
          name={"password"}
        />
        <div className={`${styles.container}`}>
          <Button type="primary" size="medium">
            Зарегистрироваться
          </Button>
        </div>
        <p className="text text_type_main-default text_color_inactive mb-4">
          Уже зарегистрированы?
          <Link to="/login" className={`${styles.link} ml-2`}>Войти</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
