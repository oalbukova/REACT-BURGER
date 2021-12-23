// react redux types
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

// styles
import styles from "./burger-ingredients.module.css";

// children components
import Ingredient from "./ingredient/ingredient";

// ui-components
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import { TAB_SWITCH } from "../../services/actions/cart";

const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const { items, currentTab } = useSelector((state) => state.cart);

  const bunRef = useRef(null);
  const saucesRef = useRef(null);
  const mainRef = useRef(null);

  const setTab = (tab, tabRef) => {
    dispatch({
      type: TAB_SWITCH,
      tab
    });
    tabRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const typeBun = items.filter((el) => el.type === "bun");
  const typeSauce = items.filter((el) => el.type === "sauce");
  const typeMain = items.filter((el) => el.type === "main");

  return (
    <section className={styles.burgerIngredients}>
      <div style={{ display: "flex" }}>
        <Tab
          value="bun"
          active={currentTab === "bun"}
          onClick={() => setTab("bun", bunRef)}
        >
          Булки
        </Tab>
        <Tab
          value="sauces"
          active={currentTab === "sauces"}
          onClick={() => setTab("sauces", saucesRef)}
        >
          Соусы
        </Tab>
        <Tab
          value="main"
          active={currentTab === "main"}
          onClick={() => setTab("main", mainRef)}
        >
          Начинки
        </Tab>
      </div>
      <div className={`${styles.container} mt-10`}>
        <h2 className={`text text_type_main-medium`} id="bun" ref={bunRef}>
          Булки
        </h2>
        <ul className={`${styles.list} mt-6 mb-10 ml-4 mr-2`}>
          {typeBun.map((item) => (
            <Ingredient key={item._id} ingredient={item} />
          ))}
        </ul>
        <h2
          className={`text text_type_main-medium`}
          id="sauces"
          ref={saucesRef}
        >
          Соусы
        </h2>
        <ul className={`${styles.list} mt-6 mb-10 ml-4 mr-2`}>
          {typeSauce.map((item) => (
            <Ingredient key={item._id} ingredient={item} />
          ))}
        </ul>
        <h2
          className={`text text_type_main-medium mb-3`}
          id="main"
          ref={mainRef}
        >
          Начинки
        </h2>
        <ul className={`${styles.list} mt-6 mb-10 ml-4 mr-2`}>
          {typeMain.map((item) => (
            <Ingredient key={item._id} ingredient={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BurgerIngredients;
