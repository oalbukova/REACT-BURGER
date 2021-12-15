// react redux types
import React, { useState, useEffect } from "react";
import { IngredientsContext, TotalPriceContext } from '../../services/appContext';

//components
import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import Modal from "../modal/modal";
import Err from '../err/err';

// styles
import styles from "./app.module.css";

// utils
import INGREDIENTS_URL from '../../utils/constants'

const App = () => {
  const [state, setState] = React.useState({
    data: []
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [isErrVisible, setIsErrVisible] = useState(false);
  const [error, setError] = useState(null);

  const handleOpenErrModal = () => {
    setIsErrVisible(true);
  };

  const handleCloseErrModal = () => {
    setIsErrVisible(false);
  };

  useEffect(() => {
    const getData = () => {
      fetch(`${INGREDIENTS_URL}ingredients`)
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
        <TotalPriceContext.Provider value={{ totalPrice, setTotalPrice }}>
          <Main handleOpenErrModal={handleOpenErrModal} setError={setError} />
          {isErrVisible && (
            <Modal handleClose={handleCloseErrModal}>
              <Err text={error} />
            </Modal>
          )}
        </TotalPriceContext.Provider>
      </IngredientsContext.Provider>
    </div>
  );
};

export default App;
