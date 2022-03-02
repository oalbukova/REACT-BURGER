// react redux types
import React from "react";
import {TFeed} from "../../utils/type";

//children component
import Feed from "./feed/feed";


// styles
import styles from "./order-feed.module.css";
import {useSelector} from "../../services/hooks";


const OrderFeed = (): JSX.Element => {
  const {feeds} = useSelector((state) => state.wsReducer);

  return (
    <section className={styles.main}>
      <ul className={`${styles.container} mt-5`}>
        {feeds.orders.map((item: TFeed, index: number) =>
          <Feed key={index} feed={item}/>
        )}
      </ul>
    </section>
  );
};

export default OrderFeed;
