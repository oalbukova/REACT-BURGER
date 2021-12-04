// react redux types
import React from "react";

// styles
import styles from "./Main.module.css";

// components
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

// utils
import { data } from "../../utils/data";

const Main = () => {
  return (
    <main className={`${styles.main} pl-5 pr-5`}>
      <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5`}>Соберите бургер</h1>
      <div className={styles.container}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data}/>
      </div>
    </main>
  );
};

export default Main;
