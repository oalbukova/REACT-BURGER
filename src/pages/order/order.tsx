// react redux types
import React from "react";

// styles
import styles from "./order.module.css";

// components
import Order from "../../components/order/order";

const OrderPage = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Order />
    </div>
  );
};

export default OrderPage;
