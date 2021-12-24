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
  const burgerIngredientsElem = document.querySelector("#burger-ingredients");
  const bunsElem = document.querySelector("#bun");
  const saucesElem = document.querySelector("#sauce");
  const toppingElem = document.querySelector("#topping");

  const dispatch = useDispatch();
  const { items, currentTab } = useSelector((state) => state.cart);

  const bunRef = useRef(null);
  const saucesRef = useRef(null);
  const toppingRef = useRef(null);

  const setCurrentTab = (tab) => {
    dispatch({
      type: TAB_SWITCH,
      tab,
    });
  };
  const setTab = (tab, tabRef) => {
    setCurrentTab(tab);
    tabRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onScrollPosition = () => {
    const bunsPosition = () =>
      Math.abs(
        bunsElem.getBoundingClientRect().top -
          burgerIngredientsElem.getBoundingClientRect().top
      );

    const saucesPosition = () =>
      Math.abs(
        saucesElem.getBoundingClientRect().top -
          burgerIngredientsElem.getBoundingClientRect().top
      );

    const toppingPosition = () =>
      Math.abs(
        toppingElem.getBoundingClientRect().top -
          burgerIngredientsElem.getBoundingClientRect().top
      );

    bunsPosition() < saucesPosition()
      ? setCurrentTab("bun")
      : saucesPosition() < toppingPosition()
      ? setCurrentTab("sauce")
      : setCurrentTab("topping");
  };

  const typeBun = items.filter((el) => el.type === "bun");
  const typeSauce = items.filter((el) => el.type === "sauce");
  const typeTopping = items.filter((el) => el.type === "main");

  return (
    <section
      className={styles.burgerIngredients}
      id="burger-ingredients"
      onScroll={() => onScrollPosition()}
    >
      <div style={{ display: "flex" }}>
        <Tab
          value="bun"
          active={currentTab === "bun"}
          onClick={() => setTab("bun", bunRef)}
        >
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={currentTab === "sauce"}
          onClick={() => setTab("sause", saucesRef)}
        >
          Соусы
        </Tab>
        <Tab
          value="topping"
          active={currentTab === "topping"}
          onClick={() => setTab("topping", toppingRef)}
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
        <h2 className={`text text_type_main-medium`} id="sauce" ref={saucesRef}>
          Соусы
        </h2>
        <ul className={`${styles.list} mt-6 mb-10 ml-4 mr-2`}>
          {typeSauce.map((item) => (
            <Ingredient key={item._id} ingredient={item} />
          ))}
        </ul>
        <h2
          className={`text text_type_main-medium mb-3`}
          id="topping"
          ref={toppingRef}
        >
          Начинки
        </h2>
        <ul className={`${styles.list} mt-6 mb-10 ml-4 mr-2`}>
          {typeTopping.map((item) => (
            <Ingredient key={item._id} ingredient={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BurgerIngredients;
