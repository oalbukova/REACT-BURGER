// react redux types
import React from "react";

//children component
import Feed from "./feed/feed";
import {feeds} from "../../utils/constants";

// styles
import styles from "./order-feed.module.css";


const OrderFeed = (): JSX.Element => {

  return (
    <section className={styles.main}>
      <ul className={`${styles.container} mt-5`}>
        {feeds.orders.map((item: any, index: number) =>
          <Feed key={index} feed={item}/>
        )}
      </ul>
    </section>
  );
};

export default OrderFeed;
