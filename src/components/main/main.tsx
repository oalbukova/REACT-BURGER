// react redux types
import React from "react";
import PropTypes from "prop-types";

// styles
import styles from "./main.module.css";

// components
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

// utils
import {typeOfIngredient} from "../../utils/types";

const Main = ({data}: any) => {

  return (
    <main className={`${styles.main} pl-5 pr-5`}>
      <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5`}>
        Соберите бургер
      </h1>
      <div className={styles.container}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data}/>
      </div>
    </main>
  );
};

Main.propTypes = {
  data: PropTypes.arrayOf(typeOfIngredient).isRequired,
};

export default Main;
