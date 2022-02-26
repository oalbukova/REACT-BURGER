// react redux types
import React from "react";

// children
import OrderFeed from "../order-feed/order-feed";
import FeedInfo from "../feed-info/feed-info";

//styles
import styles from "./order-history.module.css";


const OrderHistory = (): JSX.Element => {
  return(
    <section className={`${styles.main} pl-5 pr-5`}>
      <h1 className={`text text_type_main-large mt-10`}>
        Лента заказов
      </h1>
      <div className={styles.container}>
          <OrderFeed />
          <FeedInfo />
      </div>
    </section>
  );
};

export default OrderHistory;
