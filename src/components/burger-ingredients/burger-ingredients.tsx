// react redux types
import React, { useState } from "react";
import PropTypes from "prop-types";

// styles
import styles from "./burger-ingredients.module.css";

// children components
import Ingredient from "./ingredient/ingredient";

// ui-components
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

// utils
import { typeOfIngredient } from "../../utils/types";

const BurgerIngredients = ({ data }: any) => {
  const [current, setCurrent] = useState("bun");
  const setTab = (tab: string) => {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.burgerIngredients}>
      <div style={{ display: "flex" }}>
        <Tab value="bun" active={current === "bun"} onClick={setTab}>
          Булки
        </Tab>
        <Tab value="sauces" active={current === "sauces"} onClick={setTab}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setTab}>
          Начинки
        </Tab>
      </div>
      <div className={`${styles.container} mt-10`}>
        <h2 className={`text text_type_main-medium`} id="bun">
          Булки
        </h2>
        <ul className={`${styles.list} mt-6 mb-10 ml-4 mr-2`}>
          {data
            .filter((el: any) => el.type === "bun")
            .map((item: any) => (
              <Ingredient
                key={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
        </ul>
        <h2 className={`text text_type_main-medium`} id="sauces">
          Соусы
        </h2>
        <ul className={`${styles.list} mt-6 mb-10 ml-4 mr-2`}>
          {data
            .filter((el: any) => el.type === "sauce")
            .map((item: any) => (
              <Ingredient
                key={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
        </ul>
        <h2 className={`text text_type_main-medium`} id="main">
          Начинки
        </h2>
        <ul className={`${styles.list} mt-6 mb-10 ml-4 mr-2`}>
          {data
            .filter((el: any) => el.type === "main")
            .map((item: any) => (
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

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(typeOfIngredient).isRequired,
};

export default BurgerIngredients;
