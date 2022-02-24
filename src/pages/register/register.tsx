// react redux types
import React, {useState, useCallback, ChangeEvent, FormEvent} from "react";
import { useSelector, useDispatch } from "../../services/hooks";
import { Link, Redirect } from "react-router-dom";
import { register } from "../../services/actions/user";

// styles
import styles from "./register.module.css";

// ui-components
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {TForm} from "../../utils/type";

const RegisterPage = (): JSX.Element => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);

  const [form, setValue] = useState<TForm>({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = useCallback(
    (e: FormEvent): void => {
      e.preventDefault();
      dispatch(register(form.email, form.password, form.name));
    },
    [dispatch, form]
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

  return (
    <div className={styles.wrapper}>
      <form className={`${styles.form}`} onSubmit={handleSubmit}>
        <h1 className={`text text_type_main-medium mb-6`}>Регистрация</h1>
        <Input
          type={"text"}
          placeholder={"Имя"}
          value={form.name}
          name="name"
          onChange={onChange}
          error={false}
          errorText={"Ошибка"}
        />
        <EmailInput value={form.email} name="email" onChange={onChange} />
        <PasswordInput
          value={form.password}
          name="password"
          onChange={onChange}
        />
        <div className={`${styles.container}`}>
          <Button type="primary" size="medium">
            Зарегистрироваться
          </Button>
        </div>
        <p className="text text_type_main-default text_color_inactive mb-4">
          Уже зарегистрированы?
          <Link to={{ pathname: "/login" }} className={`${styles.link} ml-2`}>
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
