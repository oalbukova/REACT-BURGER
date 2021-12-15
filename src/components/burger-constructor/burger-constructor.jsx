// react redux types
import React, { useState, useEffect, useContext } from "react";
import { IngredientsContext, TotalPriceContext } from '../../services/appContext';

// styles
import styles from "./burger-constructor.module.css";

// components
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

// ui-components
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

// utils
import { v4 as uuidv4 } from 'uuid';
import INGREDIENTS_URL from '../../utils/constants'


// const totalPriceInitialState = { totalPrice: null }; 

// function reducer(state, action) {
//   switch (action.type) {
//     case "set":
//       return { totalPrice: action.payload };
//     default:
//       throw new Error(`Wrong type of action: ${action.type}`);
//   }
// }



const BurgerConstructor = ({ selectedNotBun, selectedBun, handleOpenErrModal, setError, selectedId, setSelectedId }) => {
  // const { data } = useContext(IngredientsContext);
  const { totalPrice, setTotalPrice } = useContext(TotalPriceContext);
  const [isOrderVisible, setIsOrderVisible] = useState(false);
  const [response, setResponse] = useState({});

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
      .then((data) => setResponse(data.order))
      .catch((err) => {
        handleOpenErrModal();
        setError(`Ошибка выполнения запроса: ${err}`);
      });
  };

  const handleCloseModal = () => {
    setIsOrderVisible(false);
  };

  useEffect(
    () => {
      let total = 0;
      selectedNotBun.map(item => (total += item.price));
      selectedBun.map(item => (total += item.price * 2));
      setTotalPrice(total);
    },
    [selectedNotBun, selectedBun, setTotalPrice]
  );

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
          <p className="text text_type_digits-medium pr-2">{totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={handleOpenModal}>
          Оформить заказ
        </Button>
      </div>
      {isOrderVisible && (
        <Modal handleClose={handleCloseModal}>
          <OrderDetails number={response.number}/>
        </Modal>
      )}
    </section>
  );
};

export default BurgerConstructor;
