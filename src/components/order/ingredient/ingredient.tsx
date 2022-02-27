// react redux types
import React, { FC, useMemo } from "react";
import {useSelector} from "../../../services/hooks";

// ui-components
import {
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

// utils
import { TIngredient, TLocationState } from "../../../utils/type";

// styles
import styles from "./ingredient.module.css";

// type TBurgerIngredient = {
//   ingredient: TIngredient;
// };

const Ingredient: FC<any> = ({ ingredientArr, ingredient }) => {

  const count = useMemo<any >(
    () =>
      ingredient?.type === "bun"
        ?  ingredientArr.filter((item: any) => item.id === ingredient.id)
        .length * 2
        :  ingredientArr.filter(
          (item: any) => item.id === ingredient.id
        ).length,
    [ingredient.type, , ingredient.id]
  );


  return (
    <li className={`${styles.img_container} mb-4`}>
      <div className={`${styles.ingredient} mb-4`}>
        <div className={`${styles.img_box} ml-1 mt-1 mr-4`}>
          <img src={ingredient.img} className={`${styles.img}`} alt="изображение ингредиента"/>
        </div>
        <h2 className='text text_type_main-default'>{ingredient.name}</h2>
      </div>
      <div className={`${styles.price}`}>
        <p className={`text text_type_digits-default pr-2`}>{count} x </p>
        <p className={`text text_type_digits-default pr-2`}>{ingredient.price}</p>
        <CurrencyIcon type="primary"/>
      </div>
    </li>
  );
};

export default Ingredient;
