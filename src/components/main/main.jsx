// react redux types
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

// styles
import styles from "./main.module.css";

// components
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";


const Main = ({ setIngredient, setArrOfId, selectedId, setSelectedId, handleOpenOrderModal, handleOpenIngredientModal }) => {
  // const [selectedBun, setSelectedBun] = useState([]);
  // const [selectedNotBun, setSelectedNotBun] = useState([]);

  // const setArrOfId = (ingredient) => {
  //   setSelectedId([...selectedId, ingredient._id])
  //   ingredient.type === 'bun' ? setSelectedBun([ingredient]) : setSelectedNotBun([...selectedNotBun, ingredient]);
  // }
  


  return (
    <main className={`${styles.main} pl-5 pr-5`}>
      <h1 className={`text text_type_main-large mt-10 mb-5`}>
        Соберите бургер
      </h1>
      <div className={styles.container}>
        <BurgerIngredients setArrOfId={setArrOfId} handleOpenIngredientModal={handleOpenIngredientModal} setIngredient={setIngredient} />
        <BurgerConstructor handleOpenOrderModal={handleOpenOrderModal} />
      </div>
    </main>
  );
};

Main.propTypes = {
  setIngredient: PropTypes.func.isRequired,
  setArrOfId: PropTypes.func.isRequired,
  selectedId: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedId: PropTypes.func.isRequired,
  handleOpenOrderModal: PropTypes.func.isRequired,
  handleOpenIngredientModal: PropTypes.func.isRequired,
};

export default Main;
