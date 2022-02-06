// react redux types
import React from "react";

// styles
import styles from "./ingredient.module.css";

// components
import IngredientDetails from "../../components/ingredient-details/ingredient-details";

const IngredientPage = () => {
  return (
    <div className={styles.container}>
      <IngredientDetails />
    </div>
  );
};

export default IngredientPage;
