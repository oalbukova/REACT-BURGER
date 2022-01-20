// react redux types
import React from "react";
import { NavLink } from "react-router-dom";

// styles
import styles from "./profile.module.css";

// components
import UserForm from "../../components/user-form/user-form";


const ProfilePage = () => {

  return (
    <div className={styles.wrapper}>
      <nav>
        <ul className={`${styles.list} mb-4`}>
          <li className={`mb-9`}>
            <NavLink
              to={{ pathname: `/profile` }}
              className={`${styles.item} text_type_main-medium text_color_inactive`}
              activeClassName={`${styles.activeItem}`}
            >
              Профиль
            </NavLink>
          </li>
          <li className={`mb-9`}>
            <NavLink
              to={{ pathname: `/profile/orders` }}
              className={`${styles.item} text_type_main-medium text_color_inactive`}
              activeClassName={`${styles.activeItem}`}
            >
              История заказов
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{ pathname: `/profile/orders/:id` }}
              className={`${styles.item} text_type_main-medium text_color_inactive`}
              activeClassName={`${styles.activeItem}`}
            >
              Выход
            </NavLink>
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
