// react redux types
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

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
  const { pathname } = useLocation();
  const { user } = useSelector((state) => state.userReducer);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    user?.user && setUserName(user?.user?.name);
    user?.user && localStorage.setItem("userName", user?.user?.name);
  }, [user?.user]);

  useEffect(() => {
    const currentUserName = localStorage.getItem("userName");
    setUserName(currentUserName);
    if (pathname === "/login") {
      setUserName("Личный кабинет");
    }
  }, [pathname]);

  const isToken = localStorage.getItem("refreshToken");

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <a href="/" className={`${styles.navLink} pl-5 pr-5`}>
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
          to={isToken ? { pathname: `/profile` } : { pathname: `/login` }}
          className={`${styles.navLink} pl-5 pr-5`}
        >
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive ml-2">
            {userName ? userName : "Личный кабинет"}
          </p>
        </Link>
      </div>
    </header>
  );
};

export default AppHeader;
