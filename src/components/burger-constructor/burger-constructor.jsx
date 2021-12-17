// react redux types
import React, { useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

// styles
import styles from "./burger-constructor.module.css";

// components
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

// ui-components
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

// utils
import { v4 as uuidv4 } from 'uuid';
import INGREDIENTS_URL from '../../utils/constants';


const BurgerConstructor = ({ selectedNotBun, selectedBun, handleOpenErrModal, setError, selectedId }) => {
  const [isOrderVisible, setIsOrderVisible] = useState(false);
  const [response, setResponse] = useState({});
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const totalPriceInitialState = { totalPrice: null };
  const [totalPriceState, totalPriceDispatcher] = useReducer(reducer, totalPriceInitialState, undefined);

  const handleOpenModal = () => {
    setIsOrderVisible(true);

    return fetch(`${INGREDIENTS_URL}orders`, {
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
        setResponse(data.order)
      })
      .catch((err) => {
        handleOpenErrModal();
        setError(`Ошибка выполнения запроса: ${err}`);
      });
  };

  const handleCloseModal = () => {
    setIsOrderVisible(false);
  };

  function reducer(state, action) {
    switch (action.type) {
      case "plus":
        return {
          totalPrice: selectedNotBun.reduce((sum, item) => sum + item.price, 0) + selectedBun.reduce((sum, item) => sum + item.price * 2, 0)
        };
      default:
        throw new Error(`Wrong type of action: ${action.type}`);
    }
  }

  useEffect(() => {
    totalPriceDispatcher({ type: 'plus' })
    totalPriceState.totalPrice === 0 || selectedBun.length === 0 ? setIsBtnDisabled(true) : setIsBtnDisabled(false);
  }, [selectedNotBun, selectedBun, totalPriceState.totalPrice])


  return (
    <section className={`${styles.burgerConstructor} ml-10 pl-4`}>
      <ul className={`${styles.list}`}>
        {selectedBun.map((item) => (
          <li className={`ml-8 mb-4`} key={uuidv4()}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${item.name} (верх)`}
              price={item.price}
              thumbnail={item.image}
            />
          </li>
        ))}
        <div className={`${styles.middleContainer} pr-2`}>
          {selectedNotBun.map((item) => (
            <li className={`${styles.itemContainer} mb-4`} key={uuidv4()}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            </li>
          ))}
        </div>
        {selectedBun.map((item) => (
          <li className={`ml-8`} key={uuidv4()}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${item.name} (низ)`}
              price={item.price}
              thumbnail={item.image}
            />
          </li>
        ))}
      </ul>
      <div className={`${styles.summary} mt-10 pr-4`}>
        <div className={`${styles.price} mr-10`}>
          <p className="text text_type_digits-medium pr-2">{totalPriceState.totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={handleOpenModal} id="orderBtn" disabled={isBtnDisabled}>
          Оформить заказ
        </Button>
      </div>
      {isOrderVisible && (
        <Modal handleClose={handleCloseModal}>
          <OrderDetails number={response.number} />
        </Modal>
      )}
    </section>
  );
};

BurgerConstructor.propTypes = {
  selectedNotBun: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedBun: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedId: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleOpenErrModal: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired
};

export default BurgerConstructor;
