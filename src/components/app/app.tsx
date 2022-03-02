import React, {useEffect} from "react";
import {useDispatch, useSelector} from "../../services/hooks";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";

// services
import {getItems} from "../../services/actions/ingredients";
import {getUser} from "../../services/actions/user";

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
import Order from "../order/order";
import Loader from "../loader/loader";

// pages
import LoginPage from "../../pages/login/login";
import RegisterPage from "../../pages/register/register";
import ForgotPasswordPage from "../../pages/forgot-password/forgot-password";
import ResetPasswordPage from "../../pages/reset-password/reset-password";
import ProfilePage from "../../pages/profile/profile";
import IngredientPage from "../../pages/ingredient/ingredient";
import NotFound404 from "../../pages/err404/err404";
import Feeds from "../../pages/feeds/feeds";
import OrderPage from "../../pages/order/order";

// utils
import {THistoryState, TLocationState} from "../../utils/type";

// styles
import styles from "./app.module.css";


const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const location = useLocation<TLocationState>();
  const history = useHistory<THistoryState>();

  const {items} = useSelector((state) => state.ingredientsReducer);
  const {user} = useSelector((state) => state.userReducer);
  const {isOrderModalVisible, isErrModalVisible} = useSelector((state) => state.modalReducer);

  const background = location.state && location.state.background;

  useEffect(() => {
    dispatch(getItems());
    dispatch(getUser());
  }, [dispatch]);

  const handleCloseIngredientModal = (): void => {
    history.goBack();
  };

  const handleCloseFeedModal = () => {
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

  return (<>
    {items.length !== 0 ? (<div className={styles.app}>
      <AppHeader/>
      <Switch location={background || location}>
        <Route path="/" exact children={<Main/>}/>
        <Route path="/feed" exact children={<Feeds/>}/>
        <Route path="/login" children={<LoginPage/>}/>
        <Route path="/register" children={<RegisterPage/>}/>
        <Route path="/forgot-password" children={<ForgotPasswordPage/>}/>
        <Route path="/reset-password" children={<ResetPasswordPage/>}/>
        <Route path="/ingredients/:id" children={<IngredientPage/>}/>
        <Route path="/feed/:id" children={<OrderPage/>}/>
        <ProtectedRoute path="/profile/orders/:id" children={<OrderPage/>}/>
        {(user?.user === undefined) ? (<Loader/>) : (<ProtectedRoute path="/profile">
          <ProfilePage/>
        </ProtectedRoute>)}
        <Route children={<NotFound404/>}/>
      </Switch>
      {background && (<Route
        path="/feed/:id"
        render={(routeProps) => {
          return <Modal handleClose={handleCloseFeedModal} {...routeProps}>
            <Order/>
          </Modal>
        }}
      />)}
      {background && (<Route
        path="/profile/orders/:id"
        render={(routeProps) => {
          return <Modal handleClose={handleCloseFeedModal} {...routeProps}>
            <Order/>
          </Modal>
        }}
      />)}
      {background && (<Route
        path="/ingredients/:id"
        children={<Modal handleClose={handleCloseIngredientModal}>
          <IngredientDetails/>
        </Modal>}
      />)}
      {isOrderModalVisible && (<Modal handleClose={handleCloseOrderModal}>
        <OrderDetails/>
      </Modal>)}
      {isErrModalVisible && (<Modal handleClose={handleCloseErrModal}>
        <Err/>
      </Modal>)}
    </div>) : (<Loader/>)}
  </>);
};

export default App;
