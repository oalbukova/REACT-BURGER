// react redux types
import React, {useState, useCallback, ChangeEvent, FormEvent} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { forgotPassword } from "../../services/actions/password";

// ui-components
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

// styles
import styles from "./forgot-password.module.css";

const ForgotPasswordPage = (): JSX.Element => {
  const dispatch = useDispatch();

  const { forgot_password } = useSelector(
    (state: any) => state.forgotPasswordReducer
  );
  const { user } = useSelector((state: any) => state.userReducer);

  const [email, setEmailValue] = useState<string>("");

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmailValue(e.target.value);
  };

  const handleSubmit = useCallback(
    (e: FormEvent): void => {
      e.preventDefault();
      dispatch(forgotPassword(email));
    },
    [dispatch, email]
  );

  if (user?.user) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }

  if (forgot_password?.success) {
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
        <EmailInput onChange={onChangeEmail} value={email} name="email" />

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
