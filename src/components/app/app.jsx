// react redux types
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// services
import { getItems } from "../../services/actions/cart";
import {
  DELETE_CURRENT_INGREDIENT,
  DELETE_CURRENT_ORDER,
  CLOSE_INGREDIENT_MODAL,
  CLOSE_ORDER_MODAL,
  CLOSE_ERR_MODAL,
} from "../../services/actions/cart";

//components
import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import Err from "../err/err";

// styles
import styles from "./app.module.css";

const App = () => {
  const { isIngredientModalVisible, isOrderModalVisible, isErrModalVisible } =
    useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const handleCloseIngredientModal = () => {
    dispatch({
      type: CLOSE_INGREDIENT_MODAL,
    });
    dispatch({
      type: DELETE_CURRENT_INGREDIENT,
    });
  };

  const handleCloseOrderModal = () => {
    dispatch({
      type: DELETE_CURRENT_ORDER,
    });
    dispatch({
      type: CLOSE_ORDER_MODAL,
    });
  };

  const handleCloseErrModal = () => {
    dispatch({
      type: CLOSE_ERR_MODAL,
    });
  };

  return (
    <div className={styles.app}>
      <AppHeader />
      <Main />
      {isIngredientModalVisible && (
        <Modal handleClose={handleCloseIngredientModal}>
          <IngredientDetails />
        </Modal>
      )}
      {isOrderModalVisible && (
        <Modal handleClose={handleCloseOrderModal}>
          <OrderDetails />
        </Modal>
      )}
      {isErrModalVisible && (
        <Modal handleClose={handleCloseErrModal}>
          <Err />
        </Modal>
      )}
    </div>
  );
};

export default App;
