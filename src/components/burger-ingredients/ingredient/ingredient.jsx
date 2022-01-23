// react redux types
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

// services
import { GET_CURRENT_INGREDIENT } from "../../../services/actions/current-item";
import { OPEN_INGREDIENT_MODAL } from "../../../services/actions/modal";

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
  let location = useLocation();

  const { selectedBun, selectedToppings } = useSelector(
    (state) => state.selectedItemsReducer
  );

  const count = useMemo(
    () =>
      ingredient.type === "bun"
        ? selectedBun.filter((item) => item._id === ingredient._id).length * 2
        : selectedToppings.filter((item) => item._id === ingredient._id).length,
    [ingredient.type, selectedBun, selectedToppings, ingredient._id]
  );

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
      {count !== 0 ? <Counter count={count} size="default" /> : null}
      <Link
        className={`${styles.link}`}
        key={ingredient._id}
        to={{
          pathname: `/ingredients/${ingredient._id}`,
          state: { background: location },
        }}
      >
        <img src={ingredient.image} alt="ingredient" />
        <div className={`${styles.price} mt-1 mb-2`}>
          <p className="text text_type_digits-default mr-2">
            {ingredient.price}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">{ingredient.name}</p>
      </Link>
    </li>
  );
};

Ingredient.propTypes = {
  ingredient: typeOfIngredient.isRequired,
};

export default Ingredient;
