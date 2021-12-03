// react redux types
import React from "react";

// styles
import styles from "./BurgerConstructor.module.css";

// ui-components
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

// utils
import { data } from "../../utils/data";

const BurgerConstructor = () => {
  return (
    <section className={`${styles.burgerConstructor} ml-10 pl-4`}>
      <div className={`${styles.list}`}>
        {data
          .filter((el) => el.name === "Краторная булка N-200i")
          .map((item) => (
            <div className={`ml-8 mb-4`}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${item.name} (верх)`}
                price={item.price}
                thumbnail={item.image}
              />
            </div>
          ))}
        <div className={`${styles.middleContainer} pr-2`}>
          {data
            .filter((el) => el.type !== "Bun")
            .map((item) => (
              <div className={`${styles.itemContainer} mb-4`}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </div>
            ))}
        </div>
        {data
          .filter((el) => el.name === "Краторная булка N-200i")
          .map((item) => (
            <div className={`ml-8`}>
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${item.name} (низ)`}
                price={item.price}
                thumbnail={item.image}
              />
            </div>
          ))}
      </div>
      <div className={`${styles.summary} mt-10 pr-4`}>
        <div className={`${styles.price} mr-10`}>
          <p className="text text_type_digits-medium pr-2">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;
