// react redux types
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { IngredientsContext } from '../../../services/appContext';

// styles
import styles from "./ingredient.module.css";

// ui-components
import { Counter, CurrencyIcon, } from "@ya.praktikum/react-developer-burger-ui-components";

// utils
import { typeOfIngredient } from "../../../utils/types";
import { v4 as uuidv4 } from 'uuid';


const Ingredient = ({ ingredient, setIngredient, handleOpenIngredientModal }) => {
  const { setSelectedBun, selectedNotBun, setSelectedNotBun, selectedId, setSelectedId } = useContext(IngredientsContext);

  const setArrOfId = (ingredient) => {
    setSelectedId([...selectedId, ingredient._id])
    ingredient.type === 'bun' ? setSelectedBun([{ ...ingredient, 'key': uuidv4() }]) : setSelectedNotBun([...selectedNotBun, { ...ingredient, 'key': uuidv4() }]);
  }

  const handleOpenModal = () => {
    setIngredient(ingredient)
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
  setIngredient: PropTypes.func.isRequired,
  handleOpenIngredientModal: PropTypes.func.isRequired
};

export default Ingredient;
