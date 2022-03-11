// react redux
import React from "react";

// utils
import { TFeed } from "../../utils/type";

// services
import { useSelector } from "../../services/hooks";
import { TWSState } from "../../services/reducers/wsReducer/wsReducer";

//children component
import Feed from "./feed/feed";

// styles
import styles from "./order-feed.module.css";

const OrderFeed = (): JSX.Element => {
  const { feeds }: TWSState = useSelector((state) => state.wsReducer);

  return (
    <section className={styles.main}>
      <ul className={`${styles.container} mt-5`}>
        {feeds.orders.map((item: TFeed, index: number) => (
          <Feed key={index} feed={item} />
        ))}
      </ul>
    </section>
  );
};

export default OrderFeed;
