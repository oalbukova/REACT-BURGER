// react redux types
import React from "react";
import { useSelector } from "../../services/hooks";
import { Link, NavLink, useLocation } from "react-router-dom";
import { TIconTypes, TLocationState, TPathname } from "../../utils/type";

// styles
import styles from "./app-header.module.css";

// ui-components
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = (): JSX.Element => {
  const { pathname } = useLocation<TLocationState>();
  const { user, currentUserRequest } = useSelector(
    (state) => state.userReducer
  );

  const typeForConstructor: TIconTypes =
    pathname === "/" ? "primary" : "secondary";
  const typeForUser: TIconTypes =
    pathname === "/profile" ? "primary" : "secondary";

  const pathOnProfile: TPathname = user?.user
    ? { pathname: `/profile` }
    : { pathname: `/login` };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={`${styles.navLink} pl-5 pr-6`}>
            <BurgerIcon type={typeForConstructor} />
            <NavLink
              to={{ pathname: `/` }}
              className={`${styles.navLink} ml-2 text text_type_main-defaul`}
              activeClassName={`${styles.activeNavLink}`}
              exact
            >
              Конструктор
            </NavLink>
          </div>
          <div className={`${styles.navLink} pl-6 pr-5`}>
            <ListIcon type="secondary" />
            <NavLink
              to={{ pathname: `/feed` }}
              exact
              className={`${styles.navLink} ml-2 text text_type_main-default`}
              activeClassName={`${styles.activeNavLink}`}
            >
              Лента заказов
            </NavLink>
          </div>
        </nav>
        <Link to={{ pathname: `/` }} className={styles.logoContainer}>
          <Logo />
        </Link>
        <div className={`${styles.profile}`}>
          <ProfileIcon type={typeForUser} />
          <NavLink
            to={pathOnProfile}
            className={`${styles.navLink} text text_type_main-default ml-2`}
            activeClassName={`${styles.activeNavLink}`}
          >
            {currentUserRequest
              ? null
              : user?.user?.name
              ? user.user.name
              : "Личный кабинет"}
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
