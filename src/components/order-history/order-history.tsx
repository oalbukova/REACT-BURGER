// react redux
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "../../services/hooks";

// services
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
} from "../../services/constants";
import { updateToken } from "../../services/actions/user";
import { TWSState } from "../../services/reducers/wsReducer";

// utils
import { TFeed } from "../../utils/type";
import { WS_USER_URL } from "../../utils/constants";
import { getCookie } from "../../utils/utils";

//components
import Loader from "../loader/loader";

// children component
import Feed from "../order-feed/feed/feed";

//styles
import styles from "./order-history.module.css";

const OrderHistory = (): JSX.Element => {
  const dispatch = useDispatch();
  const { userFeeds }: TWSState = useSelector((state) => state.wsReducer);

  useEffect(() => {
    const token = getCookie("token");
    !token && dispatch(updateToken());

    token !== undefined &&
      dispatch({ type: WS_CONNECTION_START, wsUrl: WS_USER_URL, token: token });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);

  return (
    <section className={`${styles.main} ml-15`}>
      {userFeeds?.orders ? (
        <ul className={`${styles.container} mt-5`}>
          {userFeeds?.orders.map((item: TFeed, index: number) => (
            <Feed key={index} feed={item} />
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default OrderHistory;
