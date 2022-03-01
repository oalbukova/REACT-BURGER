// react redux types
import React from "react";
import {Route, Switch, NavLink, useHistory, useLocation, useRouteMatch} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteUser} from "../../services/actions/user";
import {THistoryState, TLocationState} from "../../utils/type";

// components
import UserForm from "../../components/user-form/user-form";
import OrderHistory from "../../components/order-history/order-history";

// styles
import styles from "./profile.module.css";

// utils
import {token} from "../../utils/constants";


const ProfilePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory<THistoryState>();
  const { path } = useRouteMatch();
  const {pathname} = useLocation<TLocationState>();
  // const location = useLocation<TLocationState>();
  const location = useLocation<any>();

  const logout = () => {
    dispatch(deleteUser(token));
    localStorage.removeItem("refreshToken");
    history.push("/login");
  };


  return (<div className={styles.wrapper}>
      <nav>
        <ul className={`${styles.list} mb-4`}>
          <li className={`mb-9`}>
            <NavLink
              to={{pathname: `/profile`}}
              className={`${styles.item} text_type_main-medium text_color_inactive`}
              activeClassName={`${styles.activeItem}`}
              exact
            >
              Профиль
            </NavLink>
          </li>
          <li className={`mb-9`}>
            <NavLink
              to={{pathname: "/profile/orders"}}
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
        {pathname === "/profile/orders" ? <p
          className={`${styles.description} text text_type_main-default text_color_inactive ml-5`}
        >
          В этом разделе вы можете <br/> просмотреть свою историю заказов
        </p> : <p
          className={`${styles.description} text text_type_main-default text_color_inactive ml-5`}
        >
          В этом разделе вы можете <br/> изменить свои персональные данные
        </p>}
      </nav>
    <Switch>
      <Route exact path={path}>
        <UserForm/>
      </Route>
      <Route path={`${path}/orders`}>
        <OrderHistory />
      </Route>
    </Switch>
    </div>);
};

export default ProfilePage;
