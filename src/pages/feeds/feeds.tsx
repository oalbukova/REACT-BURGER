// react redux
import React, { useEffect } from "react";

// services
import { useDispatch, useSelector } from "../../services/hooks";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
} from "../../services/constants";
import { TWSState } from "../../services/reducers/wsReducer";

//components
import Loader from "../../components/loader/loader";

// children components
import OrderFeed from "../../components/order-feed/order-feed";
import FeedInfo from "../../components/feed-info/feed-info";

// utils
import { WS_URL } from "../../utils/constants";

//styles
import styles from "./feeds.module.css";

const Feeds = (): JSX.Element => {
  const dispatch = useDispatch();
  const { feeds }: TWSState = useSelector((state) => state.wsReducer);

  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START, wsUrl: WS_URL });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);

  return (
    <>
      {feeds?.orders.length !== 0 ? (
        <section className={`${styles.main} pl-5 pr-5`}>
          <h1 className={`text text_type_main-large mt-10`}>Лента заказов</h1>
          <div className={styles.container}>
            <OrderFeed />
            <FeedInfo />
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Feeds;
