// react redux types
import React, { useState } from "react";
import PropTypes from "prop-types";

// styles
import styles from "./ingredient.module.css";

// components
import Modal from "../../modal/modal";
import IngredientDetails from "../../ingredient-details/ingredient-details";

// ui-components
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

// type Props = {
//   name: string;
//   price: null;
//   image: string;
//   // handleOpenModal: (e: any) => void;
// };

const Ingredient = ({ ingredient }: any) => {
  const [isIngredientVisible, setIsIngredientVisible] = useState(false);

  const handleOpenModal = (e: any) => {
    setIsIngredientVisible(true);
  };

  const handleCloseModal = () => {
    setIsIngredientVisible(false);
  };

  const handleEscClose = (e: any) => {
    if (e.key === "Escape") {
      setIsIngredientVisible(false);
    }
  };

  const handlerOverlayClick = (e: any) => {
    if (e.target.classList.contains("modalOverlay")) {
      setIsIngredientVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleEscClose);
    window.addEventListener("mousedown", handlerOverlayClick);

    return () => {
      window.removeEventListener("keydown", handleEscClose);
      window.removeEventListener("mousedown", handlerOverlayClick);
    };
  });

  return (
    <>
      <li className={`${styles.item} mb-7`} onClick={handleOpenModal}>
        {ingredient.name === "Краторная булка N-200i" ||
        ingredient.name === "Соус фирменный Space Sauce" ? (
          <Counter count={1} size="default" />
        ) : null}
        <img src={ingredient.image} alt="ingridient" />
        <div className={`${styles.price} mt-1 mb-2`}>
          <p className="text text_type_digits-default mr-2">{ingredient.price}</p>
          <CurrencyIcon type="primary" />
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

// Ingredient.propTypes = {
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   image: PropTypes.string.isRequired,
// };

export default Ingredient;
