// react redux types
import React from "react";

// styles
import styles from "./Main.module.css";

// components
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

const Main = () => {
  return (
    <div className={styles.Main}>
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
  );
};

export default Main;
