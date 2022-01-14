// react redux types
import React, { useState } from "react";
import { Link } from "react-router-dom";

// styles
import styles from "./login.module.css";

// ui-components
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

export function LoginPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = React.useState("");

  const onChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };

  const onChangePassword = (e) => {
    setPasswordValue(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <form className={`${styles.form}`}>
        <h1 className={`text text_type_main-medium mb-6`}>Вход</h1>
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
            Войти
          </Button>
        </div>
        <p className="text text_type_main-default text_color_inactive mb-4">
          Вы — новый пользователь?
          <Link className={`${styles.link} ml-2`}>Зарегистрироваться</Link>
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?
          <Link className={`${styles.link} ml-2`}>Восстановить пароль</Link>
        </p>
      </form>
    </div>
  );
}
