// react redux types
import React, {useEffect} from "react";

// styles
import styles from "./order.module.css";

// components
import Order from "../../components/order/order";
import {useDispatch} from "../../services/hooks";
import {wsConnectionStart} from "../../services/actions/wsActions";
import {WS_CONNECTION_CLOSED} from "../../services/constants";


const OrderPage = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionStart());
    return () => {
      dispatch({type: WS_CONNECTION_CLOSED})
    }
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Order />
    </div>
  );
};

export default OrderPage;
