// react redux types
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

// services
import { getItems } from '../../services/actions/cart';
import { DELETE_CURRENT_INGREDIENT, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILED, DELETE_CURRENT_ORDER } from '../../services/actions/cart';

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
  const { selectedBun, selectedToppings, ingredient, order } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [isIngredientVisible, setIsIngredientVisible] = useState(false);
  const [isOrderVisible, setIsOrderVisible] = useState(false);
  const [isErrVisible, setIsErrVisible] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(getItems())
  }, [dispatch]);

  const handleOpenIngredientModal = () => {
    setIsIngredientVisible(true);
  };

  const handleCloseIngredientModal = () => {
    setIsIngredientVisible(false);
    dispatch(
      {
        type: DELETE_CURRENT_INGREDIENT,
      })
  };

  const selectedId = selectedBun.concat(selectedToppings).map(item => item._id);

  const handleOpenOrderModal = () => {
    dispatch({
      type: GET_ORDER_REQUEST
    })
    fetch(`${API_URL}orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: selectedId,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch({
            type: GET_ORDER_FAILED
          });
        }
        return Promise.reject(res.status);
      })
      .then(data => dispatch({
        type: GET_ORDER_SUCCESS,
        order: data.order
      }))
      .catch(err => {
        dispatch({
          type: GET_ORDER_FAILED
        })
      })
    setIsOrderVisible(true)
  };

  const handleCloseOrderModal = () => {
    setIsOrderVisible(false);
    dispatch(
      {
        type: DELETE_CURRENT_ORDER,
      })
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
      <Main handleOpenIngredientModal={handleOpenIngredientModal} handleOpenOrderModal={handleOpenOrderModal} handleOpenErrModal={handleOpenErrModal} setError={setError} />
      {isIngredientVisible && (
        <Modal handleClose={handleCloseIngredientModal}>
          <IngredientDetails />
        </Modal>
      )}
      {isOrderVisible && (
        <Modal handleClose={handleCloseOrderModal}>
          <OrderDetails />
        </Modal>
      )}
      {isErrVisible && (
        <Modal handleClose={handleCloseErrModal}>
          <Err text={error} />
        </Modal>
      )}
    </div>
  );
};

export default App;
