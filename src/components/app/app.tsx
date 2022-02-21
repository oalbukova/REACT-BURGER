// react redux types
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";

// services
import {getItems} from "../../services/actions/ingredients";
import {getUser, updateToken} from "../../services/actions/user";

import {closeErrModal, closeOrderModal} from "../../services/actions/modal";
import {deleteCurrentOrder} from "../../services/actions/order";
import {deleteSelectedBuns, deleteSelectedToppings,} from "../../services/actions/selected-items";

//components
import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import Err from "../err/err";
import ProtectedRoute from "../protected-route/protected-route";

// pages
import LoginPage from "../../pages/login/login";
import RegisterPage from "../../pages/register/register";
import ForgotPasswordPage from "../../pages/forgot-password/forgot-password";
import ResetPasswordPage from "../../pages/reset-password/reset-password";
import ProfilePage from "../../pages/profile/profile";
import IngredientPage from "../../pages/ingredient/ingredient";
import NotFound404 from "../../pages/err404/err404";

// utils
import {THistoryState, TLocationState} from "../../utils/type";
import {BallTriangle} from "react-loader-spinner";

// styles
import styles from "./app.module.css";

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const location = useLocation<TLocationState>();
  const history = useHistory<THistoryState>();

  const {items} = useSelector((state: any) => state.ingredientsReducer);
  const {user} = useSelector((state: any) => state.userReducer);

  const background = location?.state && location.state.background;

  const {isOrderModalVisible, isErrModalVisible} = useSelector(
    (state: any) => state.modalReducer
  );

  useEffect(() => {
    dispatch(getItems());
    dispatch(getUser());
    dispatch(updateToken(() => dispatch(getUser())));
  }, [dispatch]);

  const handleCloseIngredientModal = (): void => {
    history.goBack();
  };

  const handleCloseOrderModal = (): void => {
    dispatch(closeOrderModal());
    dispatch(deleteCurrentOrder());
    dispatch(deleteSelectedBuns());
    dispatch(deleteSelectedToppings());
  };

  const handleCloseErrModal = (): void => {
    dispatch(closeErrModal());
  };


  return (
    <>
      {items.length !== 0 ? (
        <div className={styles.app}>
          <AppHeader/>
          <Switch location={background || location}>
            <Route path="/" exact>
              <Main/>
            </Route>
            <Route path="/login">
              <LoginPage/>
            </Route>
            <Route path="/register">
              <RegisterPage/>
            </Route>
            <Route path="/forgot-password">
              <ForgotPasswordPage/>
            </Route>
            <Route path="/reset-password">
              <ResetPasswordPage/>
            </Route>
            <Route path="/ingredients/:id" children={<IngredientPage/>}/>
            {user.length !== 0 ?
              <ProtectedRoute path="/profile">
                <ProfilePage/>
              </ProtectedRoute>
              :
              <div className={styles.loader}>
                <BallTriangle
                  color="#4c4cff"
                  height={200}
                  width={200}
                  visible={true}
                />
              </div>
            }
            <Route>
              <NotFound404/>
            </Route>
          </Switch>
          {background && (
            <Route
              path="/ingredients/:id"
              children={
                <Modal handleClose={handleCloseIngredientModal}>
                  <IngredientDetails/>
                </Modal>
              }
            />
          )}
          {isOrderModalVisible && (
            <Modal handleClose={handleCloseOrderModal}>
              <OrderDetails/>
            </Modal>
          )}
          {isErrModalVisible && (
            <Modal handleClose={handleCloseErrModal}>
              <Err/>
            </Modal>
          )}
        </div>) : (
        <div className={styles.loader}>
          <BallTriangle
            color="#4c4cff"
            height={200}
            width={200}
            visible={true}
          />
        </div>
      )}
    </>
  );
};

export default App;
