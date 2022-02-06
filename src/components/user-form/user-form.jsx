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

  const nameRef = React.useRef(null);
  const emailRef = React.useRef(null);

  const [showButton, setShowButton] = useState(false);
  const [icon, setIcon] = useState("EditIcon");
  const [focus, setFocus] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [form, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    user?.user &&
      setValue({
        name: user.user.name,
        email: user.user.email,
        password: "",
      });
  }, [user?.user]);

  const onChange = (e) => {
    e.target.name === "name" && e.target.value.length < 1
      ? setNameErr(true)
      : setNameErr(false);
    e.target.name === "email" && e.target.value.length < 1
      ? setEmailErr(true)
      : setEmailErr(false);
    setValue({ ...form, [e.target.name]: e.target.value });
    setShowButton(true);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const reg = /^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$)$/;
      if (form.name.length < 1) {
        setNameErr(true);
      } else if (form.email.length < 1 || reg.test(form.email) === false) {
        setEmailErr(true);
      } else dispatch(updateUser(form.email, form.password, form.name));
      setShowButton(false);
    },
    [dispatch, form]
  );

  const handleCancel = () => {
    setNameErr(false);
    setValue({
      name: user.user.name,
      email: user.user.email,
      password: "",
    });

    setShowButton(false);
  };

  const changeIconOnFocus = () => {
    setFocus(true);
    setIcon("CloseIcon");
  };

  const changeIconOnBlur = () => {
    setFocus(false);
    setIcon("EditIcon");
  };

  const handleNameIconClick = (e) => {
    setFocus(true);
    setNameErr(false);
    setTimeout(() => {nameRef.current.focus()}, 0);
  };

  const handleEmailIconClick = (e) => {
    setFocus(true);
    setEmailErr(false);
    setTimeout(() => {emailRef.current.focus()}, 0);
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.form}`}>
      <Input
        type={"text"}
        placeholder={"Имя"}
        value={form.name}
        name="name"
        onChange={onChange}
        icon={icon}
        error={nameErr}
        errorText={`Ошибка. Поле "Имя" не может быть пустым.`}
        onFocus={changeIconOnFocus}
        onBlur={changeIconOnBlur}
        ref={nameRef}
        onIconClick={handleNameIconClick}
        disabled={!focus}
      />
      <Input
        type={"email"}
        placeholder={"Email"}
        value={form.email}
        name="email"
        onChange={onChange}
        icon={icon}
        error={emailErr}
        errorText={`Ошибка. Введите корректный адрес Email.`}
        onFocus={changeIconOnFocus}
        onBlur={changeIconOnBlur}
        ref={emailRef}
        onIconClick={handleEmailIconClick}
        disabled={!focus}
      />
      {/* <EmailInput value={form.email} name="email" onChange={onChange} /> */}
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
