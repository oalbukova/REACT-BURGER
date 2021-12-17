// react redux types
import React from "react";
import PropTypes from "prop-types";

// styles
import styles from "./ingredient.module.css";

// ui-components
import { Counter, CurrencyIcon, } from "@ya.praktikum/react-developer-burger-ui-components";


const Ingredient = ({ ingredient, image, name, price, setArrOfId, setIngredient, handleOpenIngredientModal }) => {

  const handleOpenModal = () => {
    setIngredient(ingredient)
    setArrOfId(ingredient);
    handleOpenIngredientModal();
  };

  return (
    <li className={`${styles.item} mb-7`} onClick={handleOpenModal}>
      {name === "Краторная булка N-200i" ||
        name === "Соус фирменный Space Sauce" ? (
        <Counter count={1} size="default" />
      ) : null}
      <img src={image} alt="ingredient" />
      <div className={`${styles.price} mt-1 mb-2`}>
        <p className="text text_type_digits-default mr-2">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{name}</p>
    </li>
  );
};

Ingredient.propTypes = {
  ingredient: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  setArrOfId: PropTypes.func.isRequired,
  setIngredient: PropTypes.func.isRequired,
  handleOpenIngredientModal: PropTypes.func.isRequired
};

export default Ingredient;
