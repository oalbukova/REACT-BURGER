// react redux
import React, { useState, useCallback, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "../../services/hooks";
import { Link, Redirect } from "react-router-dom";

// services
import { resetPassword } from "../../services/actions/password";

// utils
import { TResetPasswordForm } from "../../utils/type";

// ui-components
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

// styles
import styles from "./reset-password.module.css";

const ResetPasswordPage = (): JSX.Element => {
  const dispatch = useDispatch();

  const { reset_password } = useSelector((state) => state.resetPasswordReducer);
  const { forgot_password } = useSelector(
    (state) => state.forgotPasswordReducer
  );

  const { user } = useSelector((state) => state.userReducer);

  const [form, setValue] = useState<TResetPasswordForm>({
    code: "",
    password: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = useCallback(
    (e: FormEvent): void => {
      e.preventDefault();
      dispatch(resetPassword(form.password, form.code));
    },
    [dispatch, form]
  );

  if (reset_password?.success) {
    return (
      <Redirect
        to={{
          pathname: "/login",
        }}
      />
    );
  }

  if (user?.user || forgot_password?.success === undefined) {
    return (
      <Redirect
        to={{
          pathname: "/",
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
        <PasswordInput
          value={form.password}
          name="password"
          onChange={onChange}
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={onChange}
          value={form.code}
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
          <Link to={{ pathname: "/login" }} className={`${styles.link} ml-2`}>
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
