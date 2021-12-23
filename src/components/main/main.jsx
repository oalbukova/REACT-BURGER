// react redux types
import React from "react";
import PropTypes from "prop-types";

// styles
import styles from "./main.module.css";

// components
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";


const Main = ({ handleOpenOrderModal, handleOpenIngredientModal }) => {

  return (
    <main className={`${styles.main} pl-5 pr-5`}>
      <h1 className={`text text_type_main-large mt-10 mb-5`}>
        Соберите бургер
      </h1>
      <div className={styles.container}>
        <BurgerIngredients handleOpenIngredientModal={handleOpenIngredientModal} />
        <BurgerConstructor handleOpenOrderModal={handleOpenOrderModal} />
      </div>
    </main>
  );
};

Main.propTypes = {
  handleOpenOrderModal: PropTypes.func.isRequired,
  handleOpenIngredientModal: PropTypes.func.isRequired,
};

export default Main;
