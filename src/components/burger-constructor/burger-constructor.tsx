// react redux types
import React, {useState} from "react";
import PropTypes from "prop-types";

// styles
import styles from "./burger-constructor.module.css";

// components
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

// ui-components
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

// utils
import {typeOfIngredient} from "../../utils/types";

const BurgerConstructor = ({data}: any) => {
  const [isOrderVisible, setIsOrderVisible] = useState(false);

  const handleOpenModal = () => {
    setIsOrderVisible(true);
  };

  const handleCloseModal = () => {
    setIsOrderVisible(false);
  };

  return (
    <section className={`${styles.burgerConstructor} ml-10 pl-4`}>
      <ul className={`${styles.list}`}>
        {data
          .filter((el: any) => el.name === "Краторная булка N-200i")
          .map((item: any) => (
            <li className={`ml-8 mb-4`} key={item._id}>
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
          {data
            .filter((el: any) => el.type !== "bun")
            .map((item: any) => (
              <li className={`${styles.itemContainer} mb-4`} key={item._id}>
                <DragIcon type="primary"/>
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </li>
            ))}
        </div>
        {data
          .filter((el: any) => el.name === "Краторная булка N-200i")
          .map((item: any) => (
            <li className={`ml-8`} key={item._id}>
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
          <p className="text text_type_digits-medium pr-2">610</p>
          <CurrencyIcon type="primary"/>
        </div>
        <Button type="primary" size="large" onClick={handleOpenModal}>
          Оформить заказ
        </Button>
      </div>
      {isOrderVisible && (
        <Modal handleClose={handleCloseModal}>
          <OrderDetails/>
        </Modal>
      )}
    </section>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(typeOfIngredient).isRequired,
};

export default BurgerConstructor;
