// react redux types
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

// services
import { getItems } from "../../services/actions/ingredients";
import { getUser } from "../../services/actions/user";

import {
  CLOSE_INGREDIENT_MODAL,
  CLOSE_ORDER_MODAL,
  CLOSE_ERR_MODAL,
} from "../../services/actions/modal";
import { DELETE_CURRENT_INGREDIENT } from "../../services/actions/current-item";
import { DELETE_CURRENT_ORDER } from "../../services/actions/order";
import {
  DELETE_SELECTED_BUNS,
  DELETE_SELECTED_TOPPINGS,
} from "../../services/actions/selected-items";

//components
import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import Err from "../err/err";

// pages
import LoginPage from "../../pages/login/login";
import RegisterPage from "../../pages/register/register";
import ForgotPasswordPage from "../../pages/forgot-password/forgot-password";
import ResetPasswordPage from "../../pages/reset-password/reset-password";
import ProfilePage from "../../pages/profile/profile";
import IngredientPage from "../../pages/ingredient/ingredient";
import NotFound404 from "../../pages/err404/err404";

// styles
import styles from "./app.module.css";

const App = () => {
  const { isIngredientModalVisible, isOrderModalVisible, isErrModalVisible } =
    useSelector((state) => state.modalReducer);
  //  const { user } = useSelector((state) => state.userReducer);

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
      type: CLOSE_ORDER_MODAL,
    });
    dispatch({
      type: DELETE_CURRENT_ORDER,
    });
    dispatch({
      type: DELETE_SELECTED_BUNS,
    });
    dispatch({
      type: DELETE_SELECTED_TOPPINGS,
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
      <Switch>
        <Route exact path="/" children={<Main />} />
        <Route path="/login" children={<LoginPage />} />
        <Route path="/register" children={<RegisterPage />} />
        <Route path="/forgot-password" children={<ForgotPasswordPage />} />
        <Route path="/reset-password" children={<ResetPasswordPage />} />
        <Route path="/profile" children={<ProfilePage />} />
        <Route path="/ingredients/:id" children={<IngredientPage />} />
        <Route>
          <NotFound404 />
        </Route>
      </Switch>
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
