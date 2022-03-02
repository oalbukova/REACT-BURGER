// react redux types
import React, {useEffect, useMemo} from "react";
import {useLocation, useParams} from "react-router-dom";
import {useSelector} from "../../services/hooks";
import {
  TFeed, TLocationState, TOrderIngredient, TStatus, TStatusStyle,
} from "../../utils/type";

// moment
import moment from "moment";
import "moment/locale/ru";

//components
import Loader from "../loader/loader";

// children component
import Ingredient from "./ingredient/ingredient";

// ui-components
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

// styles
import styles from "./order.module.css";

const Order = (): JSX.Element => {
  const location = useLocation<TLocationState>();

  const {feeds} = useSelector((state) => state.wsReducer);
  const {items} = useSelector((state) => state.ingredientsReducer);
  const ID: string = useParams<{ id: string }>().id;

  useEffect(() => {
    location.state = undefined;
  }, [location]);

  const currentIngredient = useMemo<TFeed>(() => feeds?.orders.filter((item: TFeed) => item._id === ID)[0], [ID, feeds.orders]);

  const date = useMemo<moment.Moment>(() => {
    return  moment(currentIngredient?.createdAt);
  }, [currentIngredient?.createdAt]);

  const dateFormatted = useMemo<string>(() => {
    const gmt: string = date?.format("Z").slice(0, 3);
    return `${date?.fromNow()}, ${date?.format("h:mm")} i-GMT${gmt?.slice(0, 1)}${+gmt?.slice(1)}`;
  }, [date]);

  const ingredientArr = useMemo<Array<TOrderIngredient>>(() => {
    const ingredient: Array<TOrderIngredient> = [];
    items.map((el) => {
      for (let i = 0; i < currentIngredient?.ingredients.length; i++) {
        if (el._id === currentIngredient?.ingredients[i]) {
          ingredient.push({
            img: el.image, name: el.name, price: el.price, type: el.type, id: el._id,
          });
        }
      }
      return ingredient;
    });
    return ingredient;
  }, [currentIngredient, items]);

  const totalPrice = useMemo<number>(() => {
    const price: Array<number> = [];
    ingredientArr.map((el: TOrderIngredient) => // el.type === "bun" ? price.push(el.price * 2) :
      price.push(el.price));
    return price.reduce((sum: number, item: number) => sum + item, 0);
  }, [ingredientArr]);

  const filteredArray = useMemo<Array<TOrderIngredient>>(() => {
    const arr: Array<TOrderIngredient> = [];
    ingredientArr.filter((item: TOrderIngredient) => {
      if (!arr.some((el: TOrderIngredient) => el.id === item.id)) {
        arr.push(item);
      }
      return arr;
    });
    return arr;
  }, [ingredientArr]);

  const status: TStatus = currentIngredient?.status === "created" ? "Создан" : currentIngredient?.status === "pending" ? "Готовится" : currentIngredient?.status === "done" ? "Выполнен" : "";

  const statusStyle: TStatusStyle = currentIngredient?.status === "done" ? {color: "#00CCCC"} : {color: "#F2F2F3"};

  return (<>
      {currentIngredient !== undefined ? (<div className={`${styles.container}`}>
          <p className={`${styles.number} text text_type_digits-default mt-5 mb-10`}>
            #0{currentIngredient.number}
          </p>
          <h2 className="text text_type_main-medium mb-2">
            {currentIngredient.name}
          </h2>
          <p
            className={`text text_type_main-default mb-15`}
            style={statusStyle}
          >
            {status}
          </p>
          <h2 className="text text_type_main-medium mb-6">Состав:</h2>

          <ul className={`${styles.images}`}>
            {filteredArray && filteredArray.map((el: TOrderIngredient, index: number) => (<Ingredient
                ingredient={el}
                key={index}
                ingredientArr={ingredientArr}
              />))}
          </ul>
          <div className={`${styles.info}`}>
            <p className="text text_type_main-default text_color_inactive">
              {dateFormatted}
            </p>
            <div className={`${styles.price}`}>
              <p className={`text text_type_digits-default pr-2`}>
                {totalPrice}
              </p>
              <CurrencyIcon type="primary"/>
            </div>
          </div>
        </div>) : <Loader/>}
    </>);
};

export default Order;
