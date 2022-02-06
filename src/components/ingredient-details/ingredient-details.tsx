// react redux types
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// utils
import {TIngredient} from "../../utils/type";

//styles
import styles from "./ingredient-details.module.css";

const IngredientDetails = (): JSX.Element => {
  const { items } = useSelector((state: any) => state.ingredientsReducer);

  const ID: string = useParams<{id: string}>().id;

  const currentIngredient = useMemo<TIngredient>(
    () => items.filter((item: TIngredient) => item._id === ID)[0],
    [items, ID]
  );

  return (
    <>
      {currentIngredient && (
        <div className={`${styles.container} mt-3`}>
          <h2 className="text text_type_main-large">Детали ингредиента</h2>
          <div className={`${styles.ingredient} mt-3`}>
            <img
              src={currentIngredient.image}
              className={`${styles.image} pl-5 pr-5 mt-3 mb-4`}
              alt={currentIngredient.name}
            />
            <h3 className={`${styles.name} text text_type_main-medium mb-8`}>
              {currentIngredient.name}
            </h3>
            <ul className={`${styles.info}`}>
              <li
                className={`${styles.item} text text_type_main-default text_color_inactive pl-2 pr-2`}
              >
                <p className="text text_type_main-default text_color_inactive">
                  Калории,ккал
                </p>
                <p className="text text_type_digits-default text_color_inactive">
                  {currentIngredient.calories}
                </p>
              </li>
              <li
                className={`${styles.item} text text_type_main-default text_color_inactive pl-2 pr-2`}
              >
                <p className="text text_type_main-default text_color_inactive">
                  Белки, г
                </p>
                <p className="text text_type_digits-default text_color_inactive">
                  {currentIngredient.proteins}
                </p>
              </li>
              <li
                className={`${styles.item} text text_type_main-default text_color_inactive pl-2 pr-2`}
              >
                <p className="text text_type_main-default text_color_inactive">
                  Жиры, г
                </p>
                <p className="text text_type_digits-default text_color_inactive">
                  {currentIngredient.fat}
                </p>
              </li>
              <li
                className={`${styles.item} text text_type_main-default text_color_inactive pl-2 pr-2`}
              >
                <p className="text text_type_main-default text_color_inactive">
                  Углеводы, г
                </p>
                <p className="text text_type_digits-default text_color_inactive">
                  {currentIngredient.carbohydrates}
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default IngredientDetails;
