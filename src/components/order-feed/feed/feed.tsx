// react redux types
import React, {FC, useMemo} from "react";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "../../../services/hooks";
import {TFeed, TLocationState} from "../../../utils/type";

// moment
import moment from 'moment';
import 'moment/locale/ru';

// ui-components
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

// styles
import styles from "./feed.module.css";


type TOrderFeed = {
  feed: TFeed;
};

const Feed: FC<TOrderFeed> = ({feed}) => {
  const location = useLocation<TLocationState>();
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
        if (el._id === feed.ingredients[i]) {
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


  return (<li className={`${styles.item} p-6 mb-4`}>
    <Link
      className={`${styles.link}`}
      to={{
        pathname: `/feed/${feed._id}`, state: {background: location},
      }}
    >
      <div className={`${styles.info}`}>
        <p className="text text_type_digits-default">#0{feed.number}</p>
        <p className="text text_type_main-default text_color_inactive">{dateFormatted}</p>
      </div>
      <h2 className='text text_type_main-medium mt-6 mb-6'>{feed.name}</h2>
      <div className={`${styles.container}`}>
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
