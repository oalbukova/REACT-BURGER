// react redux types
import React, { FC, useMemo } from "react";
import { useSelector } from "../../../services/hooks";
import { Link, useLocation } from "react-router-dom";

// dnd
import { useDrag } from "react-dnd";

// ui-components
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

// utils
import {
  TBurgerIngredient,
  TIngredient,
  TLocationState,
} from "../../../utils/type";

// styles
import styles from "./ingredient.module.css";

const Ingredient: FC<TBurgerIngredient> = ({ ingredient }) => {
  const location = useLocation<TLocationState>();

  const { selectedBun, selectedToppings } = useSelector(
    (state) => state.selectedItemsReducer
  );

  const count = useMemo<number>(
    () =>
      ingredient?.type === "bun"
        ? selectedBun.filter((item: TIngredient) => item._id === ingredient._id)
            .length * 2
        : selectedToppings.filter(
            (item: TIngredient) => item._id === ingredient._id
          ).length,
    [ingredient.type, selectedBun, selectedToppings, ingredient._id]
  );

  const [{ opacity }, dragRef] = useDrag({
    type: "ingredient",
    item: ingredient,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <li className={`${styles.item} mb-7`} style={{ opacity }} ref={dragRef}>
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

export default Ingredient;
