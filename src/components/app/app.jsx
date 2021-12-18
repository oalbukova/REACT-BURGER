// react redux types
import React, { useState, useEffect } from "react";
import { IngredientsContext, BunContext, NotBunContext, SelectedIdContext } from '../../services/appContext';

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
  const [state, setState] = React.useState({ data: [] });
  const [ingredient, setIngredient] = useState({});
  const [selectedBun, setSelectedBun] = useState([]);
  const [selectedNotBun, setSelectedNotBun] = useState([]);
  const [selectedId, setSelectedId] = useState([]);
  const [isIngredientVisible, setIsIngredientVisible] = useState(false);
  const [isOrderVisible, setIsOrderVisible] = useState(false);
  const [responseOrder, setResponseOrder] = useState({});
  const [isErrVisible, setIsErrVisible] = useState(false);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    const getData = () => {
      fetch(`${API_URL}ingredients`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(res.status);
        })
        .then((data) => setState(data))
        .catch((err) => {
          handleOpenErrModal();
          setError(`Ошибка выполнения запроса: ${err}`);
        });
    };
    getData();
  }, []);

  const { data } = state;


  return (
    <div className={styles.app}>
      <AppHeader />
      <IngredientsContext.Provider value={{ data }}>
        <BunContext.Provider value={{ selectedBun, setSelectedBun }}>
          <NotBunContext.Provider value={{ selectedNotBun, setSelectedNotBun }}>
            <SelectedIdContext.Provider value={{ selectedId, setSelectedId }}>
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
            </SelectedIdContext.Provider>
          </NotBunContext.Provider>
        </BunContext.Provider>
      </IngredientsContext.Provider>
    </div>
  );
};

export default App;
