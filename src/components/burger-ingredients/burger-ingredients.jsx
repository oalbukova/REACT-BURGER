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

// utils
import { v4 as uuidv4 } from 'uuid';

const BurgerIngredients = ({ selectedNotBun, setSelectedNotBun, setSelectedBun, selectedId, setSelectedId }) => {
  const { data } = useContext(IngredientsContext);
  const [currentTab, setCurrentTab] = useState("bun");

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

  const setArrOfId = (ingredient) => {
    setSelectedId([...selectedId, ingredient._id])
    ingredient.type === 'bun' ? setSelectedBun([ingredient]) : setSelectedNotBun([...selectedNotBun, ingredient]);
  }


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
            <Ingredient key={uuidv4()} ingredient={item} name={item.name} price={item.price} image={item.image} calories={item.calories}
              proteins={item.proteins} fat={item.fat} carbohydrates={item.carbohydrates} setArrOfId={setArrOfId} />
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
              <Ingredient key={uuidv4()} ingredient={item} name={item.name} price={item.price} image={item.image} calories={item.calories}
                proteins={item.proteins} fat={item.fat} carbohydrates={item.carbohydrates} setArrOfId={setArrOfId} />
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
            <Ingredient key={uuidv4()} ingredient={item} name={item.name} price={item.price} image={item.image} calories={item.calories}
              proteins={item.proteins} fat={item.fat} carbohydrates={item.carbohydrates} setArrOfId={setArrOfId} />
          ))}
        </ul>
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  selectedNotBun: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelectedNotBun: PropTypes.func.isRequired,
  setSelectedBun: PropTypes.func.isRequired,
  selectedId: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedId: PropTypes.func.isRequired
};

export default BurgerIngredients;
