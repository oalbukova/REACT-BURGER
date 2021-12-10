// react redux types
import React, {useRef, useState} from "react";
import PropTypes from "prop-types";

// styles
import styles from "./burger-ingredients.module.css";

// children components
import Ingredient from "./ingredient/ingredient";

// ui-components
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

// utils
import {typeOfIngredient} from "../../utils/types";

const BurgerIngredients = ({data}: any) => {
  const [currentTab, setCurrentTab] = useState("bun");

  const bunRef = useRef(null);
  const saucesRef = useRef(null);
  const mainRef = useRef(null);

  const setTab = (tab: string, tabRef: any) => {
    setCurrentTab(tab);
    tabRef.current.scrollIntoView({behavior: "smooth"});
  };

  return (
    <section className={styles.burgerIngredients}>
      <div style={{display: "flex"}}>
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
          {data
            .filter((el: any) => el.type === "bun")
            .map((item: any) => (
              <Ingredient key={item._id} ingredient={item}/>
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
          {data
            .filter((el: any) => el.type === "sauce")
            .map((item: any) => (
              <Ingredient key={item._id} ingredient={item}/>
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
          {data
            .filter((el: any) => el.type === "main")
            .map((item: any) => (
              <Ingredient key={item._id} ingredient={item}/>
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
