// react redux types
import React, {useMemo} from "react";
import {TOrderFeeds} from "../../utils/type";

// styles
import styles from "./feed-info.module.css";


const FeedInfo = (): JSX.Element => {
  const feeds: TOrderFeeds = {
    "success": true, "orders": [{
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "42",
      "status": "done",
      "number": 77564,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2022-02-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733ce", "60d3b41abdacab0026a733c6", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "25",
      "status": "created",
      "number": 45564,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "27",
      "status": "done",
      "number": 38564,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "20",
      "status": "created",
      "number": 74564,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "21",
      "status": "done",
      "number": 87564,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "22",
      "status": "done",
      "number": 98564,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb",

      ],
      "_id": "23",
      "status": "done",
      "number": 13564,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3",

      ],
      "_id": "24",
      "status": "created",
      "number": 26564,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }, {
      "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cc"],
      "_id": "26",
      "status": "done",
      "number": 34434,
      "name": 'Death Star Starship Main бургер',
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    }], "total": 8, "totalToday": 6
  };

  const doneArr = useMemo<Array<number>>(() => {
    const done: Array<number> = [];
    feeds.orders.map(el => {
      if (el.status === "done") {
        done.push(el.number)
      }
      return done;
    })
    return done;
  }, [feeds]);

  const createdArr = useMemo<Array<number>>(() => {
    const created: Array<number> = [];
    feeds.orders.map(el => {
      if (el.status === "created") {
        created.push(el.number)
      }
      return created;
    })
    return created;
  }, [feeds]);


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
