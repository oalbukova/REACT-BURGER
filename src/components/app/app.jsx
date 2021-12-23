// react redux types
import React, { useState, useEffect, useMemo } from "react";
import { useDispatch } from 'react-redux';
import { IngredientsContext } from '../../services/appContext';

// services
import { getItems } from '../../services/actions/cart';

//components
import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import Err from '../err/err';

// styles
import styles from "./app.module.css";

// utils
import { API_URL } from '../../utils/constants';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems())
  }, [dispatch]);

  const [ingredient, setIngredient] = useState({});
  const [selectedIngredient, setSelectedIngredient] = useState([]);
  const [selectedId, setSelectedId] = useState([]);
  const [isIngredientVisible, setIsIngredientVisible] = useState(false);
  const [isOrderVisible, setIsOrderVisible] = useState(false);
  const [responseOrder, setResponseOrder] = useState({});
  const [isErrVisible, setIsErrVisible] = useState(false);
  const [error, setError] = useState(null);

  const createContext = (selectedIngredient, setSelectedIngredient, selectedId, setSelectedId) => {
    const context = { selectedIngredient, setSelectedIngredient, selectedId, setSelectedId };
    return context;
  }
  const generateContext = useMemo(() => createContext(selectedIngredient, setSelectedIngredient, selectedId, setSelectedId), [selectedIngredient, setSelectedIngredient, selectedId, setSelectedId])

  const handleOpenIngredientModal = () => {
    setIsIngredientVisible(true);
  };

  const handleCloseIngredientModal = () => {
    setIsIngredientVisible(false);
  };

  const handleOpenOrderModal = () => {
    return fetch(`${API_URL}orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: selectedId,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        return res.json();
      })
      .then((data) => {
        setResponseOrder(data.order);
        setIsOrderVisible(true)
      })
      .catch((err) => {
        handleOpenErrModal();
        setError(`Ошибка выполнения запроса: ${err}`);
      });
  };

  const handleCloseOrderModal = () => {
    setIsOrderVisible(false);
  };

  const handleOpenErrModal = () => {
    setIsErrVisible(true);
  };

  const handleCloseErrModal = () => {
    setIsErrVisible(false);
  };

  return (
    <div className={styles.app}>
      <AppHeader />

      <IngredientsContext.Provider value={generateContext}>
        <Main setIngredient={setIngredient} handleOpenIngredientModal={handleOpenIngredientModal} handleOpenOrderModal={handleOpenOrderModal} handleOpenErrModal={handleOpenErrModal} setError={setError} />
        {isIngredientVisible && (
          <Modal handleClose={handleCloseIngredientModal}>
            <IngredientDetails ingredient={ingredient} />
          </Modal>
        )}
        {isOrderVisible && (
          <Modal handleClose={handleCloseOrderModal}>
            <OrderDetails number={responseOrder.number} />
          </Modal>
        )}
        {isErrVisible && (
          <Modal handleClose={handleCloseErrModal}>
            <Err text={error} />
          </Modal>
        )}
      </IngredientsContext.Provider>
    </div>
  );
};

export default App;
