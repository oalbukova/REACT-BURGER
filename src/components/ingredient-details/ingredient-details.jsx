// react redux types
import React from "react";
import PropTypes from "prop-types";

//styles
import styles from "./ingredient-details.module.css";

const IngredientDetails = ({ image, name, calories, proteins, fat, carbohydrates }) => {

  return (
    <div className={`${styles.container} mt-3`}>
      <h2 className="text text_type_main-large">Детали ингредиента</h2>
      <div className={`${styles.ingredient} mt-3`}>
        <img
          src={image}
          className={`${styles.image} pl-5 pr-5 mt-3 mb-4`}
          alt={name}
        />
        <h3 className={`${styles.name} text text_type_main-medium mb-8`}>{name}</h3>
        <ul className={`${styles.info}`}>
          <li
            className={`${styles.item} text text_type_main-default text_color_inactive pl-2 pr-2`}
          >
            <p className="text text_type_main-default text_color_inactive">
              Калории,ккал
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {calories}
            </p>
          </li>
          <li
            className={`${styles.item} text text_type_main-default text_color_inactive pl-2 pr-2`}
          >
            <p className="text text_type_main-default text_color_inactive">
              Белки, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {proteins}
            </p>
          </li>
          <li
            className={`${styles.item} text text_type_main-default text_color_inactive pl-2 pr-2`}
          >
            <p className="text text_type_main-default text_color_inactive">
              Жиры, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {fat}
            </p>
          </li>
          <li
            className={`${styles.item} text text_type_main-default text_color_inactive pl-2 pr-2`}
          >
            <p className="text text_type_main-default text_color_inactive">
              Углеводы, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {carbohydrates}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

IngredientDetails.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
};

export default IngredientDetails;
