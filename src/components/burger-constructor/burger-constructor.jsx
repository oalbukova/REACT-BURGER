// react redux types
import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getOrder,
  SET_BTN_DISABLED,
  SET_BTN_ACTIVE,
  ADD_SELECTED_TOPPING,
  ADD_SELECTED_BUN,
} from "../../services/actions/cart";

// dnd
import { useDrop } from "react-dnd";

// styles
import styles from "./burger-constructor.module.css";

// children component
import Ingredient from "./ingredient/ingredient";

// ui-components
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = () => {
  const { selectedBun, selectedToppings } = useSelector(
    (state) => state.selectedItemsReducer
  );
  const { isBtnDisabled } = useSelector((state) => state.buttonReducer);
  const dispatch = useDispatch();

  const handleDrop = (item) => {
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
    dispatch(getOrder(selectedId));
  };

  const renderCard = (item, index) => {
    return (
      <Ingredient
        item={item}
        index={index}
        key={item.uuidId}
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
              key={item.uuidId}
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
              key={item.uuidId}
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
        <p
          className={`${styles.text} text text_type_main-large text_color_inactive`}
        >
          Пожалуйста для выбора желаемого ингредиента перетащите его сюда из
          левого меню
        </p>
      )}
    </section>
  );
};

export default BurgerConstructor;
