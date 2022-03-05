// react redux
import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { useDispatch } from "../../services/hooks";

// services
import { updateToken } from "../../services/actions/user";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
} from "../../services/constants";

// components
import Order from "../../components/order/order";

// utils
import { WS_URL, WS_USER_URL } from "../../utils/constants";
import { getCookie } from "../../utils/utils";

// styles
import styles from "./order.module.css";

const OrderPage = (): JSX.Element => {
  const dispatch = useDispatch();

  const isProfile = !!useRouteMatch("/profile");

  useEffect(() => {
    const token = getCookie("token");
    !token && dispatch(updateToken());
    dispatch(
      isProfile
        ? {
            type: WS_CONNECTION_START,
            wsUrl: WS_USER_URL,
            token: token,
          }
        : { type: WS_CONNECTION_START, wsUrl: WS_URL }
    );
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch, isProfile]);

  return (
    <div className={styles.container}>
      <Order />
    </div>
  );
};

export default OrderPage;
