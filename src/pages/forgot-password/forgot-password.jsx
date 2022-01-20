// react redux types
import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { forgotPassword } from "../../services/actions/password";

// styles
import styles from "./forgot-password.module.css";

// ui-components
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ForgotPasswordPage = () => {
  const dispatch = useDispatch();

  const { forgot_password } = useSelector(
    (state) => state.forgotPasswordReducer
  );

  const [form, setValue] = useState("");

  const onChangeEmail = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(forgotPassword(form));
    },
    [dispatch, form]
  );

  if (forgot_password.success === true) {
    return (
      <Redirect
        to={{
          pathname: "/reset-password",
        }}
      />
    );
  }

  return (
    <div className={styles.wrapper}>
      <form className={`${styles.form}`} onSubmit={handleSubmit}>
        <h1 className={`text text_type_main-medium mb-6`}>
          Восстановление пароля
        </h1>
        <EmailInput onChange={onChangeEmail} value={form.email} name="email" />

        <div className={`${styles.container}`}>
          <Button type="primary" size="medium">
            Восстановить
          </Button>
        </div>
        <p className="text text_type_main-default text_color_inactive mb-4">
          Вспомнили пароль?
          <Link to={{ pathname: "/login" }} className={`${styles.link} ml-2`}>
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
