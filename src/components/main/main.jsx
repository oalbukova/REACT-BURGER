// react redux types
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../services/actions/user";

// dnd
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// styles
import styles from "./main.module.css";

// components
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

const Main = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUser());
  // }, [dispatch]);
  
  return (
    <main className={`${styles.main} pl-5 pr-5`}>
      <h1 className={`text text_type_main-large mt-10 mb-5`}>
        Соберите бургер
      </h1>

      <div className={styles.container}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </div>
    </main>
  );
};

export default Main;
