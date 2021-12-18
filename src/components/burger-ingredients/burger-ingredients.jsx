// react redux types
import React, { useRef, useState, useContext } from "react";
import PropTypes from "prop-types";
import { IngredientsContext } from '../../services/appContext';

// styles
import styles from "./burger-ingredients.module.css";

// children components
import Ingredient from "./ingredient/ingredient";

// ui-components
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";


const BurgerIngredients = ({ setArrOfId, handleOpenIngredientModal, setIngredient }) => {
  const [currentTab, setCurrentTab] = useState("bun");
  const { data } = useContext(IngredientsContext);

  const bunRef = useRef(null);
  const saucesRef = useRef(null);
  const mainRef = useRef(null);

  const setTab = (tab, tabRef) => {
    setCurrentTab(tab);
    tabRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const typeBun = data.filter((el) => el.type === "bun");
  const typeSauce = data.filter((el) => el.type === "sauce");
  const typeMain = data.filter((el) => el.type === "main");
  

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
            <Ingredient key={item._id} ingredient={item} setArrOfId={setArrOfId} handleOpenIngredientModal={handleOpenIngredientModal} setIngredient={setIngredient} />
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
          {
            typeSauce.map((item) => (
              <Ingredient key={item._id} ingredient={item} setArrOfId={setArrOfId} handleOpenIngredientModal={handleOpenIngredientModal} setIngredient={setIngredient} />
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
            <Ingredient key={item._id} ingredient={item} setArrOfId={setArrOfId} handleOpenIngredientModal={handleOpenIngredientModal} setIngredient={setIngredient} />
          ))}
        </ul>
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  setArrOfId: PropTypes.func.isRequired,
  handleOpenIngredientModal: PropTypes.func.isRequired,
  setIngredient: PropTypes.func.isRequired
};

export default BurgerIngredients;
