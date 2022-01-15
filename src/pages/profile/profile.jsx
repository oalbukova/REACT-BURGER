// react redux types
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// styles
import styles from "./profile.module.css";

// ui-components
import {
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ProfilePage = () => {
  const [nameValue, setNameValue] = useState("Марк");
  const [emailValue, setEmailValue] = useState("mail@stellar.burgers");
  const [passwordValue, setPasswordValue] = useState("111111111");

  const onChangeName = (e) => {
    setNameValue(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };

  const onChangePassword = (e) => {
    setPasswordValue(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <nav>
        <ul className={`${styles.list} mb-4`}>
          <li className={`${styles.item} text text_type_main-medium  mb-9`}>Профиль</li>
          <li className={`${styles.item} text text_type_main-medium text_color_inactive mb-9`}>
            История заказов
          </li>
          <li className={`${styles.item} text text_type_main-medium text_color_inactive`}>
            Выход
          </li>
        </ul>
        <p className={`${styles.description} text text_type_main-default text_color_inactive ml-5`}>
          В этом разделе вы можете <br/> изменить свои персональные данные
        </p>
      </nav>
      <form className={`${styles.form}`}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={onChangeName}
          value={nameValue}
          name={"name"}
          icon={"EditIcon"}
          error={false}
          errorText={"Ошибка"}
        />
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
      </form>
    </div>
  );
};

export default ProfilePage;
