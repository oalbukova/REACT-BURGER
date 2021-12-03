// react redux types
import React from "react";

// styles
import styles from "./BurgerIngredients.module.css";

// children components
import Tabs from "./Tabs/Tabs";
import Ingredient from "./Ingredient/Ingredient";

// utils
import { data } from "./../../utils/data";

const BurgerIngredients = () => {
  return (
    <section className={styles.burgerIngredients}>
      <Tabs />
      <div className={`${styles.container} mt-10`}>
        <h2 className={`text text_type_main-medium`}>Булки</h2>
        <ul className={`${styles.list} mt-6 mb-10 ml-4 mr-2`}>
          {data
            .filter((el) => el.type === "bun")
            .map((item) => (
              <Ingredient
                key={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
        </ul>
        <h2 className={`text text_type_main-medium`}>Соусы</h2>
        <ul className={`${styles.list} mt-6 mb-10 ml-4 mr-2`}>
          {data
            .filter((el) => el.type === "sauce")
            .map((item) => (
              <Ingredient
                key={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
        </ul>
        <h2 className={`text text_type_main-medium`}>Начинки</h2>
        <ul className={`${styles.list} mt-6 mb-10 ml-4 mr-2`}>
          {data
            .filter((el) => el.type === "main")
            .map((item) => (
              <Ingredient
                key={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
        </ul>
      </div>
    </section>
  );
};

export default BurgerIngredients;
