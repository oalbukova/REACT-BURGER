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


// const totalPriceInitialState = { totalPrice: null }; 

// function reducer(state, action) {
//   switch (action.type) {
//     case "set":
//       return { totalPrice: action.payload };
//     case "reset":
//       return totalPriceInitialState;
//     default:
//       throw new Error(`Wrong type of action: ${action.type}`);
//   }
// }



const BurgerConstructor = () => {
  const { data } = useContext(IngredientsContext); 
  const { totalPrice, setTotalPrice } = useContext(TotalPriceContext);
  const [isOrderVisible, setIsOrderVisible] = useState(false);

  const handleOpenModal = () => {
    setIsOrderVisible(true);
  };

  const handleCloseModal = () => {
    setIsOrderVisible(false);
  };

  const typeNotBun = data.filter((el) => el.type !== "bun");
  const typeBun = data.filter((el) => el.name === "Краторная булка N-200i");

  useEffect(
    () => {
      let total = 0;
      typeNotBun.map(item => (total += item.price));
      typeBun.map(item => (total += item.price * 2));
      setTotalPrice(total);
    },
    [ typeNotBun, typeBun, setTotalPrice]
  );

  return (
    <section className={`${styles.burgerConstructor} ml-10 pl-4`}>
      <ul className={`${styles.list}`}>
        {typeBun.map((item) => (
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
          {typeNotBun.map((item) => (
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
        {typeBun.map((item) => (
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
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
};

export default BurgerConstructor;
