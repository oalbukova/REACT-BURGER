// react redux types
import React, {useState} from "react";

// styles
import styles from "./ingredient.module.css";

// components
import Modal from "../../modal/modal";
import IngredientDetails from "../../ingredient-details/ingredient-details";

// ui-components
import {Counter, CurrencyIcon,} from "@ya.praktikum/react-developer-burger-ui-components";

// utils
import {typeOfIngredient} from "../../../utils/types";

const Ingredient = ({ingredient}: any) => {
  const [isIngredientVisible, setIsIngredientVisible] = useState(false);

  const handleOpenModal = (e: any) => {
    setIsIngredientVisible(true);
  };

  const handleCloseModal = () => {
    setIsIngredientVisible(false);
  };

  return (
    <>
      <li className={`${styles.item} mb-7`} onClick={handleOpenModal}>
        {ingredient.name === "Краторная булка N-200i" ||
        ingredient.name === "Соус фирменный Space Sauce" ? (
          <Counter count={1} size="default"/>
        ) : null}
        <img src={ingredient.image} alt="ingridient"/>
        <div className={`${styles.price} mt-1 mb-2`}>
          <p className="text text_type_digits-default mr-2">{ingredient.price}</p>
          <CurrencyIcon type="primary"/>
        </div>
        <p className="text text_type_main-default">{ingredient.name}</p>
      </li>
      {isIngredientVisible && (
        <Modal handleClose={handleCloseModal}>
          <IngredientDetails ingredient={ingredient}/>
        </Modal>
      )}
    </>
  );
};

Ingredient.propTypes = {
  ingredient: typeOfIngredient,
};

export default Ingredient;
