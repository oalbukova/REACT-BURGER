// react redux types
import React, {FC, useMemo} from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import {useSelector} from "../../services/hooks";
import {TFeed, TIngredient, TLocationState, TOrderFeeds, TStatus, TStatusStyle} from "../../utils/type";

// moment
import moment from 'moment';
import 'moment/locale/ru';

// ui-components
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

// styles
import styles from "./order.module.css";
import {feeds} from "../../utils/constants";
import {log} from "util";
import Ingredient from "./ingredient/ingredient";


const Order: any = (): JSX.Element => {

  const ID: string = useParams<{ id: string }>().id;

  const currentIngredient = useMemo(() => feeds.orders.filter((item: TFeed) => item._id === ID)[0], [ID]);

  const {items} = useSelector((state) => state.ingredientsReducer);

  const date: moment.Moment = moment(currentIngredient.createdAt);

  const dateFormatted = useMemo<string>(() => {
    const gmt: string = date.format('Z').slice(0, 3)
    return (`${date.fromNow()}, ${date.format('h:mm')} i-GMT${gmt.slice(0, 1)}${+gmt.slice(1)}`)
  }, [date]);

  const ingredient: Array<any> = [];
  const ingredientArr = useMemo<any>(() => {
    items.map(el => {
      for (let i = 0; i < currentIngredient.ingredients.length; i++) {
        if (el._id === currentIngredient.ingredients[i]) {
          ingredient.push({
            img: el.image, name: el.name, price: el.price, type: el.type, id: el._id
          })
        }
      }
      return ingredient;
    })
    return ingredient;
  }, [currentIngredient, items]);


  const totalPrice = useMemo<number>(() => {
    const price: Array<number> = [];
    ingredientArr.map((el: any) => el.type === "bun" ? price.push(el.price * 2) : price.push(el.price))
    return (price.reduce((sum: number, item: number) => sum + item, 0));
  }, [ingredientArr]);


  const filteredArray: any = [];
  ingredientArr.filter((item: any) => {
    if (!filteredArray.some((el: any) => el.id === item.id)) {
      filteredArray.push(item);
    }
    return filteredArray;
  });

  const status: TStatus = (currentIngredient.status === "created") ? "Создан" : (currentIngredient.status === "pending") ? "Готовится" : (currentIngredient.status === "done") ? "Выполнен" : '';

  const statusStyle: TStatusStyle = (currentIngredient.status === "done") ? {color: "#00CCCC"} : {color: "#F2F2F3"};


  return (<>
    {currentIngredient ? (<div className={`${styles.container}`}>
      <p className="text text_type_digits-default mt-5 mb-10">#0{currentIngredient.number}</p>
      <h2 className='text text_type_main-medium mb-2'>{currentIngredient.name}</h2>
      <p className={`text text_type_main-default mb-15`} style={statusStyle}>{status}</p>
      <h2 className='text text_type_main-medium mb-6'>Состав:</h2>

      <ul className={`${styles.images}`}>
        {filteredArray && filteredArray.map((el: any, index: number) => <Ingredient ingredient={el} key={index}
                                                                                    filteredArray={filteredArray}
                                                                                    ingredientArr={ingredientArr}/>)}
      </ul>
      <div className={`${styles.info} mt-10`}>
        <p className="text text_type_main-default text_color_inactive">{dateFormatted}</p>
        <div className={`${styles.price}`}>
          <p className={`text text_type_digits-default pr-2`}>{totalPrice}</p>
          <CurrencyIcon type="primary"/>
        </div>
      </div>
    </div>) : null}
  </>);
};

export default Order;
