// react redux types
import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../services/actions/user";

// styles
import styles from "./user-form.module.css";

// ui-components
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

const UserForm = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);
  const [showButton, setShowButton] = useState(false);

  const [form, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    user.user &&
      setValue({
        name: user.user.name,
        email: user.user.email,
        password: "",
      });
  }, [user.user]);

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });

    setShowButton(true);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(updateUser(form.email, form.password, form.name));
      setShowButton(false);
    },
    [dispatch, form]
  );

  const handleCancel = () => {
    setValue({
      name: user.user.name,
      email: user.user.email,
      password: "",
    });

    setShowButton(false);
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.form}`}>
      <Input
        type={"text"}
        placeholder={"Имя"}
        value={form.name}
        name="name"
        onChange={onChange}
        icon={"EditIcon"}
        error={false}
        errorText={"Ошибка"}
      />
      <EmailInput value={form.email} name="email" onChange={onChange} />
      <PasswordInput
        value={form.password}
        name="password"
        onChange={onChange}
      />
      {showButton && (
        <div className={styles.buttonContainer}>
          <Button type="secondary" size="medium" onClick={handleCancel}>
            Отмена
          </Button>
          <Button type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      )}
    </form>
  );
};

export default UserForm;
