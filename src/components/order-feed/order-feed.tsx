// react redux types
import React from "react";
import {TOrderFeeds} from "../../utils/type";

//children component
import Feed from "./feed/feed";

// styles
import styles from "./order-feed.module.css";


const OrderFeed = (): JSX.Element => {
  const feeds: TOrderFeeds = {
    "success": true,
    "orders": [
      {
        "ingredients": [
          "60d3b41abdacab0026a733c7",
          "60d3b41abdacab0026a733d4",
          "60d3b41abdacab0026a733cb",
          "60d3b41abdacab0026a733d1",
          "60d3b41abdacab0026a733d3",
          "60d3b41abdacab0026a733cf",
          "60d3b41abdacab0026a733cc"
        ],
        "_id": "42",
        "status": "done",
        "number": 34564,
        "name": 'Death Star Starship Main бургер',
        "createdAt": "2022-02-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      },
      {
        "ingredients": [
          "60d3b41abdacab0026a733ce",
          "60d3b41abdacab0026a733c6",
          "60d3b41abdacab0026a733d4",
          "60d3b41abdacab0026a733cb",
          "60d3b41abdacab0026a733d1",
          "60d3b41abdacab0026a733d3",
          "60d3b41abdacab0026a733cf",
          "60d3b41abdacab0026a733cc"
        ],
        "_id": "25",
        "status": "done",
        "number": 34564,
        "name": 'Death Star Starship Main бургер',
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      },
      {
        "ingredients": [
          "60d3b41abdacab0026a733c7",
          "60d3b41abdacab0026a733d4",
          "60d3b41abdacab0026a733cb",
          "60d3b41abdacab0026a733d1",
          "60d3b41abdacab0026a733d3",
          "60d3b41abdacab0026a733cf",
          "60d3b41abdacab0026a733cc"
        ],
        "_id": "27",
        "status": "done",
        "number": 34564,
        "name": 'Death Star Starship Main бургер',
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      },
      {
        "ingredients": [
          "60d3b41abdacab0026a733c7",
          "60d3b41abdacab0026a733d4",
          "60d3b41abdacab0026a733cb",
          "60d3b41abdacab0026a733d1",
          "60d3b41abdacab0026a733d3",
          "60d3b41abdacab0026a733cf",
          "60d3b41abdacab0026a733cc"
        ],
        "_id": "20",
        "status": "done",
        "number": 34564,
        "name": 'Death Star Starship Main бургер',
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      },
      {
        "ingredients": [
          "60d3b41abdacab0026a733c7",
          "60d3b41abdacab0026a733d4",
          "60d3b41abdacab0026a733cb",
          "60d3b41abdacab0026a733d1",
          "60d3b41abdacab0026a733d3",
          "60d3b41abdacab0026a733cf",
          "60d3b41abdacab0026a733cc"
        ],
        "_id": "21",
        "status": "done",
        "number": 34564,
        "name": 'Death Star Starship Main бургер',
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      },
      {
        "ingredients": [
          "60d3b41abdacab0026a733c7",
          "60d3b41abdacab0026a733d4",
          "60d3b41abdacab0026a733cb",
          "60d3b41abdacab0026a733d1",
          "60d3b41abdacab0026a733d3",
          "60d3b41abdacab0026a733cf",
          "60d3b41abdacab0026a733cc"
        ],
        "_id": "22",
        "status": "done",
        "number": 34564,
        "name": 'Death Star Starship Main бургер',
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      },
      {
        "ingredients": [
          "60d3b41abdacab0026a733c7",
          "60d3b41abdacab0026a733d4",
          "60d3b41abdacab0026a733cb",

        ],
        "_id": "23",
        "status": "done",
        "number": 34564,
        "name": 'Death Star Starship Main бургер',
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      },
      {
        "ingredients": [
          "60d3b41abdacab0026a733c7",
          "60d3b41abdacab0026a733d4",
          "60d3b41abdacab0026a733cb",
          "60d3b41abdacab0026a733d1",
          "60d3b41abdacab0026a733d3",

        ],
        "_id": "24",
        "status": "done",
        "number": 34564,
        "name": 'Death Star Starship Main бургер',
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      },{
        "ingredients": [
          "60d3b41abdacab0026a733c7",
          "60d3b41abdacab0026a733d4",
          "60d3b41abdacab0026a733cb",
          "60d3b41abdacab0026a733d1",
          "60d3b41abdacab0026a733d3",
          "60d3b41abdacab0026a733cf",
          "60d3b41abdacab0026a733cc"
        ],
        "_id": "26",
        "status": "done",
        "number": 34564,
        "name": 'Death Star Starship Main бургер',
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      }],
    "total": 8,
    "totalToday": 8
  };


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
