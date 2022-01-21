// react redux types
import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import { getUser, deleteUser } from "../../services/actions/user";

// styles
import styles from "./profile.module.css";

// components
import UserForm from "../../components/user-form/user-form";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const token = localStorage.getItem("refreshToken");

  const logout = () => {
    dispatch(deleteUser(token));
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userName");
    history.push("/login");
  };

  return (
    <div className={styles.wrapper}>
      <nav>
        <ul className={`${styles.list} mb-4`}>
          <li className={`mb-9`}>
            <NavLink
              to={{ pathname: `/profile` }}
              className={`${styles.item} text_type_main-medium text_color_inactive`}
              activeClassName={`${styles.activeItem}`}
              exact
            >
              Профиль
            </NavLink>
          </li>
          <li className={`mb-9`}>
            <NavLink
              to={{ pathname: "/profile/orders" }}
              exact
              className={`${styles.item} text_type_main-medium text_color_inactive`}
              activeClassName={`${styles.activeItem}`}
            >
              История заказов
            </NavLink>
          </li>
          <li>
            <button
              onClick={logout}
              className={`${styles.exit} text_type_main-medium text_color_inactive`}
            >
              Выход
            </button>
          </li>
        </ul>
        <p
          className={`${styles.description} text text_type_main-default text_color_inactive ml-5`}
        >
          В этом разделе вы можете <br /> изменить свои персональные данные
        </p>
      </nav>
      <UserForm />
    </div>
  );
};

export default ProfilePage;
