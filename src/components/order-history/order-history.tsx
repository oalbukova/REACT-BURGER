// react redux types
import React from "react";

//styles
import styles from "./order-history.module.css";
import Feed from "../order-feed/feed/feed";
import {feeds} from "../../utils/constants";


const OrderHistory = (): JSX.Element => {

  return(
    <section className={`${styles.main} ml-15`}>
      <ul className={`${styles.container} mt-5`}>
        {feeds.orders.map((item: any, index: number) =>
          <Feed key={index} feed={item}/>
        )}
      </ul>
    </section>
  );
};

export default OrderHistory;
