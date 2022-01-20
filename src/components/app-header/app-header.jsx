// react redux types
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// styles
import styles from "./app-header.module.css";

// ui-components
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
  const { currentUser } = useSelector((state) => state.currentUserReducer);

  const userName =
    currentUser && currentUser.user ? currentUser.user.name : "Личный кабинет";

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <a href="#" className={`${styles.navLink} pl-5 pr-5`}>
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default ml-2">Конструктор</p>
          </a>
          <a href="#" className={`${styles.navLink} pl-5 pr-5 ml-2`}>
            <ListIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive ml-2">
              Лента заказов
            </p>
          </a>
        </nav>
        <Logo />
        <Link
          to={{ pathname: `/profile` }}
          className={`${styles.navLink} pl-5 pr-5`}
        >
          <ProfileIcon type="secondary" />

          <p className="text text_type_main-default text_color_inactive ml-2">
            {userName}
          </p>
        </Link>
      </div>
    </header>
  );
};

export default AppHeader;
