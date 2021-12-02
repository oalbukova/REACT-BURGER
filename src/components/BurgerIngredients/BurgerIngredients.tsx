// react redux types
import React, { useState } from "react";

// styles
import styles from "./BurgerIngredients.module.css";

// ui-components
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

// children components
import Ingredient from "./Ingredient/Ingredient";

// utils
import { data } from "./../../utils/data";

const BurgerIngredients = () => {
  const Tabs = () => {
    const [current, setCurrent] = useState("bun");
    return (
      <div style={{ display: "flex" }}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauces" active={current === "sauces"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab
          value="topping"
          active={current === "topping"}
          onClick={setCurrent}
        >
          Начинки
        </Tab>
      </div>
    );
  };

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
