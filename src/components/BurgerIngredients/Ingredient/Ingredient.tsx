// react redux types
import React from "react";

// styles
import styles from "./Ingredient.module.css";

// ui-components
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const Ingredient = (props: any) => {
  const { name, image, price } = props;

  return (
    <li className={`${styles.item} mb-7`}>
      {name === "Краторная булка N-200i" ||
      name === "Соус фирменный Space Sauce" ? (
        <Counter count={1} size="default" />
      ) : null}
      <img src={image} alt="ingridient" />
      <div className={`${styles.price} mt-1 mb-2`}>
        <p className="text text_type_digits-default mr-2">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{name}</p>
    </li>
  );
};

export default Ingredient;
