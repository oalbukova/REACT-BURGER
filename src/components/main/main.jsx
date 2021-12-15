// react redux types
import React, { useState } from "react";

// styles
import styles from "./main.module.css";

// components
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

const Main = ({ handleOpenErrModal, setError }) => {
  const [selectedBun, setSelectedBun] = useState([]);
  const [selectedNotBun, setSelectedNotBun] = useState([]);
  const [selectedId, setSelectedId] = useState([]);

  return (
    <main className={`${styles.main} pl-5 pr-5`}>
      <h1 className={`text text_type_main-large mt-10 mb-5`}>
        Соберите бургер
      </h1>
      <div className={styles.container}>
        <BurgerIngredients setSelectedBun={setSelectedBun} selectedNotBun={selectedNotBun} setSelectedNotBun={setSelectedNotBun} selectedId={selectedId} setSelectedId={setSelectedId} />
        <BurgerConstructor selectedBun={selectedBun} selectedNotBun={selectedNotBun} selectedId={selectedId} setSelectedId={setSelectedId} handleOpenErrModal={handleOpenErrModal} setError={setError} />
      </div>
    </main>
  );
};

export default Main;
