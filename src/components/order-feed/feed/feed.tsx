// react redux types
import React, {FC, useMemo} from "react";
import {Link, useLocation, useRouteMatch} from "react-router-dom";
import {useSelector} from "../../../services/hooks";
import {TLocationState, TOrderFeed, TStatus, TStatusStyle} from "../../../utils/type";

// moment
import moment from 'moment';
import 'moment/locale/ru';

// ui-components
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

// styles
import styles from "./feed.module.css";


const Feed: FC<TOrderFeed> = ({feed}) => {
  const location = useLocation<any>();
  const {pathname} = useLocation<TLocationState>();
  const { path } = useRouteMatch();
  const {items} = useSelector((state) => state.ingredientsReducer);

  const date: moment.Moment = moment(feed.createdAt);

  const dateFormatted = useMemo<string>(() => {
    const gmt: string = date.format('Z').slice(0, 3)
    return (`${date.fromNow()}, ${date.format('h:mm')} i-GMT${gmt.slice(0, 1)}${+gmt.slice(1)}`)
  }, [date]);

  const totalPrice = useMemo<number>(() => {
    const price: Array<number> = [];
    items.map(el => {
      for (let i = 0; i < feed.ingredients.length; i++) {
        if (el._id === feed.ingredients[i] && el.type === "bun") {
          price.push(el.price * 2)
        } else if (el._id === feed.ingredients[i]) {
          price.push(el.price)
        }
      }
      return price;
    })
    return (price.reduce((sum: number, item: number) => sum + item, 0));
  }, [feed, items]);

  const imagesArr = useMemo<Array<string>>(() => {
    const images: Array<string> = [];
    items.map(el => {
      for (let i = 0; i < feed.ingredients.length; i++) {
        if (el._id === feed.ingredients[i]) {
          images.push(el.image)
        }
      }
      return images;
    })
    return images;
  }, [feed, items]);

  const status: TStatus = (feed.status === "created") ? "Создан" : (feed.status === "pending") ? "Готовится" : (feed.status === "done") ? "Выполнен" : '';

  const statusStyle: TStatusStyle = (feed.status === "done") ? {color: "#00CCCC"} : {color: "#F2F2F3"};

  return (<li className={`${styles.item} p-6 mb-4`}>
    <Link
      className={`${styles.link}`}
      to={{
        pathname: `${path}/${feed._id}`,
        state: {background: location},
      }}
    >
      <div className={`${styles.info}`}>
        <p className="text text_type_digits-default">#0{feed.number}</p>
        <p className="text text_type_main-default text_color_inactive">{dateFormatted}</p>
      </div>
      <h2 className='text text_type_main-medium mt-6'>{feed.name}</h2>
      {pathname === "/profile/orders" ?
        <p className={`text text_type_main-default mt-2`} style={statusStyle}>{status}</p> : null}
      <div className={`${styles.container} mt-6`}>
        <div className={`${styles.images}`}>
          {imagesArr && imagesArr.map((el: string, index: number) => ((index < 6) &&
            <div key={index} className={`${styles.img_box}`}>
              <img src={el} className={`${styles.img}`} alt="изображение ингредиента"/>
            </div>))}
          {imagesArr.length > 6 &&
            <p className={`${styles.counter} text text_type_main-default`}>+{imagesArr.length - 6}</p>}
        </div>
        <div className={`${styles.price}`}>
          <p className={`text text_type_digits-default pr-2`}>{totalPrice}</p>
          <CurrencyIcon type="primary"/>
        </div>
      </div>
    </Link>
  </li>);
};

export default Feed;
