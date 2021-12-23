// react redux types
import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from 'react-redux';
import PropTypes from "prop-types";

// styles
import styles from "./burger-constructor.module.css";

// ui-components
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";


const BurgerConstructor = ({ handleOpenOrderModal }) => {
  const { selectedBun, selectedToppings } = useSelector(state => state.cart);

  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  
  const totalPrice = useMemo(() => {
    return selectedToppings.reduce((sum, item) => sum + item.price, 0) + selectedBun.reduce((sum, item) => sum + item.price * 2, 0)
  },
    [selectedToppings, selectedBun]
  )

  useEffect(() => {
    totalPrice === 0 || selectedBun.length === 0 ? setIsBtnDisabled(true) : setIsBtnDisabled(false);
  }, [totalPrice, selectedBun])


  return (
    <section className={`${styles.burgerConstructor} ml-10 pl-4`}>
      <ul className={`${styles.list}`}>
        {selectedBun && selectedBun.map((item, index) => (
          <li className={`ml-8 mb-4`} key={index}>
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
          {selectedToppings && selectedToppings.map((item, index) => (
            <li className={`${styles.itemContainer} mb-4`} key={index}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            </li>
          ))}
        </div>
        {selectedBun && selectedBun.map((item, index) => (
          <li className={`ml-8`} key={index}>
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
        <Button type="primary" size="large" onClick={handleOpenOrderModal} id="orderBtn" disabled={isBtnDisabled}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  handleOpenOrderModal: PropTypes.func.isRequired,
};

export default BurgerConstructor;
