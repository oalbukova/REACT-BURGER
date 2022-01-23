// react redux types
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { getOrder } from "../../services/actions/order";
import {
  ADD_SELECTED_BUN,
  ADD_SELECTED_TOPPING,
} from "../../services/actions/selected-items";
import {
  SET_BTN_ACTIVE,
  SET_BTN_DISABLED,
} from "../../services/actions/button";

// dnd
import { useDrop } from "react-dnd";

// children component
import Ingredient from "./ingredient/ingredient";

// ui-components
import {
  BurgerIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

// utils
import { v4 as uuidv4 } from "uuid";

// styles
import styles from "./burger-constructor.module.css";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { selectedBun, selectedToppings } = useSelector(
    (state) => state.selectedItemsReducer
  );
  const { user } = useSelector((state) => state.userReducer);
  const { isBtnDisabled } = useSelector((state) => state.buttonReducer);

  const handleDrop = (item) => {
    item.uuid = uuidv4();
    item.type === "bun"
      ? dispatch({
          type: ADD_SELECTED_BUN,
          item,
        })
      : dispatch({
          type: ADD_SELECTED_TOPPING,
          item,
        });
  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      handleDrop(item);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const borderColor = isHover ? "rgb(133, 133, 173)" : "transparent";

  const totalPrice = useMemo(() => {
    return (
      selectedToppings.reduce((sum, item) => sum + item.price, 0) +
      selectedBun.reduce((sum, item) => sum + item.price * 2, 0)
    );
  }, [selectedToppings, selectedBun]);

  useEffect(() => {
    totalPrice === 0 || selectedBun.length === 0
      ? dispatch({
          type: SET_BTN_DISABLED,
        })
      : dispatch({
          type: SET_BTN_ACTIVE,
        });
  }, [dispatch, totalPrice, selectedBun]);

  const selectedId = useMemo(() => {
    return selectedBun.concat(selectedToppings).map((item) => item._id);
  }, [selectedBun, selectedToppings]);

  const handleOpenOrderModal = () => {
    if (user.user) {
      dispatch(getOrder(selectedId));
    } else {
      history.replace({ pathname: "/login" });
      return;
    }
  };

  const renderCard = (item, index) => {
    return (
      <Ingredient
        item={item}
        index={index}
        key={item.uuid}
        id={item._id}
        type={""}
        text={item.name}
      />
    );
  };

  return (
    <section
      className={`${styles.burgerConstructor} ml-10 pl-4`}
      style={{ borderColor }}
      ref={dropTarget}
    >
      <ul className={`${styles.list}`}>
        {selectedBun &&
          selectedBun.map((item, index) => (
            <Ingredient
              item={item}
              key={item.uuid}
              index={index}
              type={"top"}
              text={`${item.name} (верх)`}
              id={item._id}
            />
          ))}
        <div className={`${styles.middleContainer} pr-2`}>
          {selectedToppings &&
            selectedToppings.map((item, index) => renderCard(item, index))}
        </div>
        {selectedBun &&
          selectedBun.map((item, index) => (
            <Ingredient
              item={item}
              key={item.uuid}
              index={index}
              type={"bottom"}
              text={`${item.name} (низ)`}
              id={item._id}
            />
          ))}
      </ul>
      {selectedBun.length !== 0 || selectedToppings.length !== 0 ? (
        <div className={`${styles.summary} mt-10 pr-4`}>
          <div className={`${styles.price} mr-10`}>
            <p className="text text_type_digits-medium pr-2">{totalPrice}</p>
            <CurrencyIcon type="primary" />
          </div>
          <Button
            type="primary"
            size="large"
            onClick={handleOpenOrderModal}
            id="orderBtn"
            disabled={isBtnDisabled}
          >
            Оформить заказ
          </Button>
        </div>
      ) : (
        <>
          <div className={`${styles.burgerImg}`}>
            <BurgerIcon type="secondary" />
          </div>
          <p
            className={`${styles.text} text text_type_main-medium text_color_inactive`}
          >
            Для выбора ингредиента перетащите его из левого меню.
          </p>
          <p
            className={`${styles.text} text text_type_main-medium text_color_inactive mt-5`}
          >
            Начните с добавления булки.
          </p>
        </>
      )}
    </section>
  );
};

export default BurgerConstructor;
