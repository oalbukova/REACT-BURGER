// react redux types
import React from "react";

// styles
import styles from "./app-header.module.css";

// ui-components
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
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
            <p className="text text_type_main-default text_color_inactive ml-2">Лента заказов</p>
          </a>
        </nav>
        <Logo />
        <a href="#" className={`${styles.navLink} pl-5 pr-5`}>
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive ml-2">Личный кабинет</p>
        </a>
      </div>
    </header>
  );
};

export default AppHeader;
