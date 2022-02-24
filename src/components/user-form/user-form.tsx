// react redux types
import React, {ChangeEvent, FocusEvent, FormEvent, useCallback, useEffect, useState,} from "react";
import {useDispatch, useSelector} from "../../services/hooks";
import {updateUser} from "../../services/actions/user";

// styles
import styles from "./user-form.module.css";

// ui-components
import {Button, Input, PasswordInput,} from "@ya.praktikum/react-developer-burger-ui-components";
import {TForm} from "../../utils/type";
import {TICons} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

const UserForm = (): JSX.Element => {
  const dispatch = useDispatch();

  const {user} = useSelector((state) => state.userReducer);

  const nameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);

  const [form, setValue] = useState<TForm>({
    name: "",
    email: "",
    password: "",
  });

  const [showButton, setShowButton] = useState<boolean>(false);
  const [iconOnName, setIconOnName] = useState<keyof TICons | undefined>(
    "EditIcon"
  );
  const [iconOnEmail, setIconOnEmail] = useState<keyof TICons | undefined>(
    "EditIcon"
  );

  const [focusOnName, setFocusOnName] = useState<boolean>(false);
  const [focusOnEmail, setFocusOnEmail] = useState<boolean>(false);

  const [nameErr, setNameErr] = useState<boolean>(false);
  const [emailErr, setEmailErr] = useState<boolean>(false);

  useEffect((): void => {
    user?.user &&
    setValue({
      name: user.user.name,
      email: user.user.email,
      password: "",
    });
  }, [user?.user]);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.target.name === "name" && e.target.value.length < 1
      ? setNameErr(true)
      : setNameErr(false);
    e.target.name === "email" && e.target.value.length < 1
      ? setEmailErr(true)
      : setEmailErr(false);
    setValue({...form, [e.target.name]: e.target.value});
    setShowButton(true);
  };

  const handleSubmit = useCallback(
    (e: FormEvent) => {
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

  const handleCancel = (): void => {
    setNameErr(false);
    setEmailErr(false);
    user?.user &&
    setValue({
      name: user.user.name,
      email: user.user.email,
      password: "",
    });
    setShowButton(false);
  };

  const changeIconOnFocus = (e: FocusEvent<HTMLInputElement>): void => {
    if (e.target.name === "name") {
      setFocusOnName(true);
      setIconOnName("CloseIcon");
    } else if (e.target.name === "email") {
      setFocusOnEmail(true);
      setIconOnEmail("CloseIcon");
    }
  };

  const changeIconOnBlur = (e: FocusEvent<HTMLInputElement>): void => {
    if (e.target.name === "name") {
      setFocusOnName(false);
      setIconOnName("EditIcon");
    } else if (e.target.name === "email") {
      setFocusOnEmail(false);
      setIconOnEmail("EditIcon");
    }
  };

  const handleNameIconClick = () => {
    setFocusOnName(true);
    setNameErr(false);
    setTimeout(() => {
      nameRef.current?.focus();
    }, 0);
  };

  const handleEmailIconClick = () => {
    setFocusOnEmail(true);
    setEmailErr(false);
    setTimeout(() => {
      emailRef.current?.focus();
    }, 0);
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.form}`}>
      <Input
        type={"text"}
        placeholder={"Имя"}
        value={form.name}
        name="name"
        onChange={onChange}
        icon={iconOnName}
        error={nameErr}
        errorText={`Ошибка. Поле "Имя" не может быть пустым.`}
        onFocus={changeIconOnFocus}
        onBlur={changeIconOnBlur}
        ref={nameRef}
        onIconClick={handleNameIconClick}
        disabled={!focusOnName}
      />
      <Input
        type={"email"}
        placeholder={"Email"}
        value={form.email}
        name="email"
        onChange={onChange}
        icon={iconOnEmail}
        error={emailErr}
        errorText={`Ошибка. Введите корректный адрес Email.`}
        onFocus={changeIconOnFocus}
        onBlur={changeIconOnBlur}
        ref={emailRef}
        onIconClick={handleEmailIconClick}
        disabled={!focusOnEmail}
      />
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
