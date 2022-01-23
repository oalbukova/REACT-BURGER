// react redux types
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getItems } from "../../services/actions/ingredients";

//styles
import styles from "./ingredient-details.module.css";

const IngredientDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const { items } = useSelector((state) => state.ingredientsReducer);
  // @ts-ignore
  let ID = useParams().id;
  const currentIngredient = items.filter((item) => item._id === ID)[0];
  // const { id } = useParams();
  // console.log(id)

  // const { currentIngredient } = useSelector(
  //   (state) => state.currentItemReducer
  // );

  // console.log(currentIngredient._id)

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
