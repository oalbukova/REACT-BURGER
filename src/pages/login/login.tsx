// react redux types
import React, {ChangeEvent, FormEvent, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect, useLocation } from "react-router-dom";
import { authorize } from "../../services/actions/user";

// styles
import styles from "./login.module.css";

// ui-components
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {TLocationState} from "../../utils/type";

const LoginPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const location = useLocation<TLocationState>();

  const { user } = useSelector((state: any) => state.userReducer);

  const [form, setValue] = useState({ email: "", password: "" });

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    dispatch(authorize(form.email, form.password));
  };

  const isToken: string | null = localStorage.getItem("refreshToken");
  if (isToken && user?.user) {
    return <Redirect to={location?.state?.from || "/"} />;
  }

  return (
    <div className={styles.wrapper}>
      <form className={`${styles.form}`} onSubmit={handleSubmit}>
        <h1 className={`text text_type_main-medium mb-6`}>Вход</h1>
        <EmailInput value={form.email} name="email" onChange={onChange} />
        <PasswordInput
          value={form.password}
          name="password"
          onChange={onChange}
        />
        <div className={`${styles.container}`}>
          <Button type="primary" size="medium">
            Войти
          </Button>
        </div>
        <p className="text text_type_main-default text_color_inactive mb-4">
          Вы — новый пользователь?
          <Link
            to={{ pathname: "/register" }}
            className={`${styles.link} ml-2`}
          >
            Зарегистрироваться
          </Link>
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?
          <Link
            to={{ pathname: "/forgot-password" }}
            className={`${styles.link} ml-2`}
          >
            Восстановить пароль
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
