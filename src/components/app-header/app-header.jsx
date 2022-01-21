// react redux types
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, useLocation } from "react-router-dom";

// styles
import styles from "./app-header.module.css";

//utils
import { getCookie } from "../../utils/utils";

import { updateToken } from "../../services/actions/user";

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

  const dispatch = useDispatch();

  useEffect(() => {
    user?.user && setUserName(user?.user?.name);
    user?.user && localStorage.setItem("userName", user?.user?.name);
  }, [user?.user]);

  useEffect(() => {
    console.log(getCookie("token"));
    console.log(user);
    console.log(localStorage.getItem("refreshToken"));
    dispatch(updateToken(localStorage.getItem("refreshToken")));
  }, []);

  useEffect(() => {
    const currentUserName = localStorage.getItem("userName");
    setUserName(currentUserName);
    if (pathname === "/login") {
      setUserName("Личный кабинет");
    }
  }, [pathname]);

  const isToken = localStorage.getItem("refreshToken");

  const typeForConstructor = pathname === "/" ? "primary" : "secondary";

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={`${styles.navLink} pl-5 pr-5`}>
            <BurgerIcon type={typeForConstructor} />
            <NavLink
              to={{ pathname: `/` }}
              className={`${styles.navLink} ml-2 text_type_main-medium text_color_inactive`}
              activeClassName={`${styles.activeNavLink}`}
              exact
            >
              Конструктор
            </NavLink>
          </div>
          <div className={`${styles.navLink} pl-5 pr-5`}>
            <ListIcon type="secondary" />
            <NavLink
              to={{ pathname: `#` }}
              exact
              className={`${styles.navLink} ml-2 text_type_main-medium text_color_inactive`}
              activeClassName={`${styles.activeNavLink} text_type_main-medium`}
            >
              Лента заказов
            </NavLink>
          </div>
        </nav>
        <Link to={{ pathname: `/` }} exact className={styles.logoContainer}>
          <Logo />
        </Link>
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
