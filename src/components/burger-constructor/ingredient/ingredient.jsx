// react redux types
import React from "react";
import { useDispatch } from "react-redux";
import { DELETE_SELECTED_TOPPING } from "../../../services/actions/cart";

// ui-components
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

// dnd
import { useDrag } from "react-dnd";

// styles
import styles from "./ingredient.module.css";

const Ingredient = ({ item, type, text }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch({
      type: DELETE_SELECTED_TOPPING,
      item,
    });
  };

  // const uuidItem = {...item, uniqueId: uuidv4()}
  // const [{ opacity }, ref] = useDrag({
  //   type: 'constructor',
  //   item,
  //   collect: monitor => ({
  //     opacity: monitor.isDragging() ? 0.5 : 1
  //   })
  // });

  return (
    <>
      {item.type === "bun" ? (
        <li className={`ml-8 mb-4`} /*ref={ref} style={{ opacity }}*/>
          <ConstructorElement
            type={type}
            isLocked={true}
            text={text}
            price={item.price}
            thumbnail={item.image}
          />
        </li>
      ) : (
        <li className={`${styles.itemContainer} mb-4`}>
          <DragIcon type="primary" />
          <ConstructorElement
            handleClose={onDelete}
            text={item.uuidId}
            price={item.price}
            thumbnail={item.image}
          />
        </li>
      )}
    </>
  );
};

export default Ingredient;
