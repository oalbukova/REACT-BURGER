// react redux types
import React, { useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  DELETE_SELECTED_TOPPING,
  SORT_TOPPING,
} from "../../../services/actions/selected-items";

// ui-components
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

// dnd
import { useDrag, useDrop } from "react-dnd";

// styles
import styles from "./ingredient.module.css";

// utils
import { typeOfIngredient } from "../../../utils/types";

const Ingredient = ({ item, index, id, type, text }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch({
      type: DELETE_SELECTED_TOPPING,
      item,
    });
  };

  const moveTopping = useCallback(
    (dragIndex, hoverIndex) => {
      dispatch({
        type: SORT_TOPPING,
        dragIndex,
        hoverIndex,
      });
    },
    [dispatch]
  );

  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: "constructor",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveTopping(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "constructor",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <>
      {item.type === "bun" ? (
        <li className={`ml-8 mb-4`}>
          <ConstructorElement
            type={type}
            isLocked={true}
            text={text}
            price={item.price}
            thumbnail={item.image}
          />
        </li>
      ) : (
        <li
          className={`${styles.itemContainer} mb-4`}
          ref={ref}
          style={{ opacity }}
          data-handler-id={handlerId}
        >
          <DragIcon type="primary" />
          <ConstructorElement
            handleClose={onDelete}
            text={item.name}
            price={item.price}
            thumbnail={item.image}
          />
        </li>
      )}
    </>
  );
};

Ingredient.propTypes = {
  index: PropTypes.number.isRequired,
  item: typeOfIngredient.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Ingredient;
