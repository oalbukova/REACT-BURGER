// react redux types
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, Redirect, useLocation } from "react-router-dom";
import { authorize, getUser } from "../../services/actions/user";

// styles
import styles from "./login.module.css";

// ui-components
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const { user } = useSelector((state) => state.userReducer);
  const [form, setValue] = useState({ email: "", password: "" });

  useEffect(() => {
  //  dispatch(getUser());
    localStorage.removeItem('userName');
  }, [dispatch]);

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authorize(form.email, form.password));
  };

  // setTimeout(() => {
  //   const isToken = localStorage.getItem("refreshToken");
  //   if (isToken) {
  //     history.push("/");
  //   }
  // }, 2000);
  console.log(user?.user);
  console.log(localStorage.getItem("userName"))
  const isToken = localStorage.getItem("refreshToken");
  if (isToken) {
    return (
      <Redirect
        to={location.state?.from || "/"}
      />
    );
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
          Вы — новый пользователь?
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
