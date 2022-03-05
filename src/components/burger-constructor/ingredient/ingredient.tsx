// react redux
import React, { useRef, useCallback, FC } from "react";
import { useDispatch } from "../../../services/hooks";

// services
import {
  deleteSelectedTopping,
  sortTopping,
} from "../../../services/actions/selected-items";

// ui-components
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

// dnd
import { useDrag, useDrop } from "react-dnd";
import type { XYCoord, Identifier } from "dnd-core";

// utils
import { TConstructorIngredient, TDragItem } from "../../../utils/type";

// styles
import styles from "./ingredient.module.css";

const Ingredient: FC<TConstructorIngredient> = ({
  item,
  index,
  id,
  type,
  text,
}) => {
  const dispatch = useDispatch();

  const onDelete = (): void => {
    dispatch(deleteSelectedTopping(item));
  };

  const moveTopping = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      dispatch(sortTopping(dragIndex, hoverIndex));
    },
    [dispatch]
  );

  const ref = useRef<HTMLLIElement>(null);

  const [{ handlerId }, drop] = useDrop<
    TDragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: "constructor",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: TDragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

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
      {item?.type === "bun" ? (
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

export default Ingredient;
