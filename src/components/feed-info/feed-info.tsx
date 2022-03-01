// react redux types
import React, {useMemo} from "react";

// utils
import {feeds} from "../../utils/constants";

// styles
import styles from "./feed-info.module.css";


const FeedInfo = (): JSX.Element => {

  const doneArr = useMemo<Array<number>>(() => {
    const done: Array<number> = [];
    feeds.orders.map(el => {
      if (el.status === "done") {
        done.push(el.number)
      }
      return done;
    })
    return done;
  }, []);

  const createdArr = useMemo<Array<number>>(() => {
    const created: Array<number> = [];
    feeds.orders.map(el => {
      if (el.status === "created") {
        created.push(el.number)
      }
      return created;
    })
    return created;
  }, []);


  return (<section className={`${styles.main} mt-5`}>
    <div className={`${styles.order_container} mb-15`}>
      <div className={`${styles.done}`}>
        <p className="text text_type_main-medium mb-5">Готовы:</p>
        <div className={`${styles.done_orders}`}>
          {doneArr && doneArr.map((el: number, index: number) => (
            <p className={`${styles.done_number} text text_type_digits-default mb-2 mr-5`} key={index}>{el}</p>))}
        </div>
      </div>
      <div className={`${styles.created}`}>
        <p className="text text_type_main-medium  mb-5">В работе:</p>
        <div className={`${styles.created_orders}`}>
          {createdArr && createdArr.map((el: number, index: number) => (
            <p className={`${styles.created_number} text text_type_digits-default mb-2 mr-5`} key={index}>{el}</p>))}
        </div>
      </div>
    </div>
    <div className={`${styles.total_container}`}>
      <p className="text text_type_main-medium">Выполнено за все время:</p>
      <p className={`${styles.num_large} text text_type_digits-large mb-15`}>{feeds.total}</p>
      <p className="text text_type_main-medium">Выполнено за сегодня:</p>
      <p className={`${styles.num_large} text text_type_digits-large`}>{feeds.totalToday}</p>
    </div>
  </section>);
};

export default FeedInfo;
