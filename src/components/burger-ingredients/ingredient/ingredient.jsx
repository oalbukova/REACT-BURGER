// react redux types
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// services
import {
  GET_CURRENT_INGREDIENT,
  OPEN_INGREDIENT_MODAL,
} from "../../../services/actions/cart";

// dnd
import { useDrag } from "react-dnd";

// styles
import styles from "./ingredient.module.css";

// ui-components
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

// utils
import { typeOfIngredient } from "../../../utils/types";

const Ingredient = ({ ingredient }) => {
  const dispatch = useDispatch();

  const [{ opacity }, dragRef] = useDrag({
    type: "ingredient",
    item: ingredient,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  const handleOpenModal = () => {
    dispatch({
      type: GET_CURRENT_INGREDIENT,
      ingredient,
    });
    dispatch({
      type: OPEN_INGREDIENT_MODAL,
    });
  };

  return (
    <li
      className={`${styles.item} mb-7`}
      onClick={handleOpenModal}
      style={{ opacity }}
      ref={dragRef}
    >
      <Counter count={1} size="default" />
      <img src={ingredient.image} alt="ingredient" />
      <div className={`${styles.price} mt-1 mb-2`}>
        <p className="text text_type_digits-default mr-2">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{ingredient.name}</p>
    </li>
  );
};

Ingredient.propTypes = {
  ingredient: typeOfIngredient.isRequired,
};

export default Ingredient;
