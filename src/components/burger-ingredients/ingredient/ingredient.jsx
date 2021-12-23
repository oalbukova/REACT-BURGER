// react redux types
import React from "react";
import { useDispatch } from 'react-redux';
import PropTypes from "prop-types";

// services
import { ADD_SELECTED_BUN, ADD_SELECTED_TOPPING, GET_CURRENT_INGREDIENT } from '../../../services/actions/cart';

// styles
import styles from "./ingredient.module.css";

// ui-components
import { Counter, CurrencyIcon, } from "@ya.praktikum/react-developer-burger-ui-components";

// utils
import { typeOfIngredient } from "../../../utils/types";


const Ingredient = ({ ingredient, handleOpenIngredientModal }) => {
  const dispatch = useDispatch();

  const setArrOfId = (ingredient) => {
    ingredient.type === 'bun' ?
      dispatch(
        {
          type: ADD_SELECTED_BUN,
          ingredient

        })
      :
      dispatch(
        {
          type: ADD_SELECTED_TOPPING,
          ingredient,
        })
  }

  const handleOpenModal = () => {
    dispatch(
      {
        type: GET_CURRENT_INGREDIENT,
        ingredient,
      })
    setArrOfId(ingredient);
    handleOpenIngredientModal();
  };

  return (
    <li className={`${styles.item} mb-7`} onClick={handleOpenModal}>
      {ingredient.name === "Краторная булка N-200i" ||
        ingredient.name === "Соус фирменный Space Sauce" ? (
        <Counter count={1} size="default" />
      ) : null}
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
  handleOpenIngredientModal: PropTypes.func.isRequired
};

export default Ingredient;
