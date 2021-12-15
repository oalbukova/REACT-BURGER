// react redux types
import React, { useState } from "react";
import PropTypes from "prop-types";

// styles
import styles from "./ingredient.module.css";

// components
import Modal from "../../modal/modal";
import IngredientDetails from "../../ingredient-details/ingredient-details";

// ui-components
import { Counter, CurrencyIcon, } from "@ya.praktikum/react-developer-burger-ui-components";


const Ingredient = ({ ingredient, image, name, price, calories, proteins, fat, carbohydrates, selectedNotBun, setSelectedNotBun, setSelectedBun, selectedId, setSelectedId }) => {
  const [isIngredientVisible, setIsIngredientVisible] = useState(false);

  const handleOpenModal = (e) => {
    setIsIngredientVisible(true);
    setSelectedId([...selectedId, ingredient._id])
    console.log(selectedId)
    ingredient.type === 'bun' ? setSelectedBun([ingredient]) : setSelectedNotBun([...selectedNotBun, ingredient]);
  };

  const handleCloseModal = () => {
    setIsIngredientVisible(false);
  };

  return (
    <>
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
      {isIngredientVisible && (
        <Modal handleClose={handleCloseModal}>
          <IngredientDetails name={name} price={price} image={image} calories={calories} proteins={proteins} fat={fat}
            carbohydrates={carbohydrates} />
        </Modal>
      )}
    </>
  );
};

Ingredient.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
};

export default Ingredient;
