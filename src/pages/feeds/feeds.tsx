// react redux types
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "../../services/hooks";
import {WS_CONNECTION_CLOSED} from '../../services/constants';

//components
import Loader from "../../components/loader/loader";

// children components
import OrderFeed from "../../components/order-feed/order-feed";
import FeedInfo from "../../components/feed-info/feed-info";

//styles
import styles from "./feeds.module.css";
import {wsConnectionStart} from "../../services/actions/wsActions";


const Feeds = (): JSX.Element => {
  const dispatch = useDispatch();
  const {feeds} = useSelector((state) => state.wsReducer);

  useEffect(() => {
    dispatch(wsConnectionStart());
    return () => {
      dispatch({type: WS_CONNECTION_CLOSED})
    }
  }, [dispatch]);


  return (<>
    {feeds?.orders.length !== 0 ? (<section className={`${styles.main} pl-5 pr-5`}>
      <h1 className={`text text_type_main-large mt-10`}>
        Лента заказов
      </h1>
      <div className={styles.container}>
        <OrderFeed/>
        <FeedInfo/>
      </div>
    </section>) : <Loader/>}
  </>);
};

export default Feeds;
