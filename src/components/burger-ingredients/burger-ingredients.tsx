// react redux
import React, { RefObject, useMemo, useRef } from "react";

// services
import { useDispatch, useSelector } from "../../services/hooks";
import { tabSwitch } from "../../services/actions/tab";

// children components
import Ingredient from "./ingredient/ingredient";

// ui-components
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

// utils
import { TIngredient } from "../../utils/type";

// styles
import styles from "./burger-ingredients.module.css";

const BurgerIngredients = (): JSX.Element => {
  const burgerIngredientsElem: HTMLElement | null = document.querySelector(
    "#burger-ingredients"
  );
  const bunsElem: HTMLElement | null = document.querySelector("#bun");
  const saucesElem: HTMLElement | null = document.querySelector("#sauce");
  const toppingElem: HTMLElement | null = document.querySelector("#topping");

  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.ingredientsReducer);
  const { currentTab } = useSelector((state) => state.tabReducer);

  const bunRef = useRef<HTMLHeadingElement>(null);
  const saucesRef = useRef<HTMLHeadingElement>(null);
  const toppingRef = useRef<HTMLHeadingElement>(null);

  const setCurrentTab = (tab: string): void => {
    dispatch(tabSwitch(tab));
  };
  const setTab = (tab: string, tabRef: RefObject<HTMLHeadingElement>): void => {
    setCurrentTab(tab);
    tabRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onScrollPosition = (): void => {
    if (bunsElem && saucesElem && toppingElem && burgerIngredientsElem) {
      const bunsPosition: number = Math.abs(
        bunsElem.getBoundingClientRect().top -
          burgerIngredientsElem.getBoundingClientRect().top
      );

      const saucesPosition: number = Math.abs(
        saucesElem.getBoundingClientRect().top -
          burgerIngredientsElem.getBoundingClientRect().top
      );

      const toppingPosition: number = Math.abs(
        toppingElem.getBoundingClientRect().top -
          burgerIngredientsElem.getBoundingClientRect().top
      );

      bunsPosition < saucesPosition
        ? setCurrentTab("bun")
        : saucesPosition < toppingPosition
        ? setCurrentTab("sauce")
        : setCurrentTab("topping");
    }
  };

  const typeBun = useMemo<Array<TIngredient>>(() => {
    return items.filter((el: TIngredient) => el.type === "bun");
  }, [items]);

  const typeSauce = useMemo<Array<TIngredient>>(() => {
    return items.filter((el: TIngredient) => el.type === "sauce");
  }, [items]);

  const typeTopping = useMemo<Array<TIngredient>>(() => {
    return items.filter((el: TIngredient) => el.type === "main");
  }, [items]);

  return (
    <section
      className={styles.burgerIngredients}
      id="burger-ingredients"
      onScroll={(): void => onScrollPosition()}
    >
      <div style={{ display: "flex" }}>
        <Tab
          value="bun"
          active={currentTab === "bun"}
          onClick={(): void => setTab("bun", bunRef)}
        >
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={currentTab === "sauce"}
          onClick={(): void => setTab("sauce", saucesRef)}
        >
          Соусы
        </Tab>
        <Tab
          value="topping"
          active={currentTab === "topping"}
          onClick={(): void => setTab("topping", toppingRef)}
        >
          Начинки
        </Tab>
        f
      </div>
      <div className={`${styles.container} mt-10`}>
        {typeBun?.length !== 0 ? (
          <>
            <h2 className={`text text_type_main-medium`} id="bun" ref={bunRef}>
              Булки
            </h2>
            <ul className={`${styles.list} mt-6 mb-10 ml-4 mr-2`}>
              {typeBun.map((item: TIngredient) => (
                <Ingredient key={item._id} ingredient={item} />
              ))}
            </ul>
          </>
        ) : null}
        {typeSauce?.length !== 0 ? (
          <>
            <h2
              className={`text text_type_main-medium`}
              id="sauce"
              ref={saucesRef}
            >
              Соусы
            </h2>
            <ul className={`${styles.list} mt-6 mb-10 ml-4 mr-2`}>
              {typeSauce.map((item: TIngredient) => (
                <Ingredient key={item._id} ingredient={item} />
              ))}
            </ul>
          </>
        ) : null}
        {typeTopping?.length !== 0 ? (
          <>
            <h2
              className={`text text_type_main-medium mb-3`}
              id="topping"
              ref={toppingRef}
            >
              Начинки
            </h2>
            <ul className={`${styles.list} mt-6 mb-10 ml-4 mr-2`}>
              {typeTopping.map((item: TIngredient) => (
                <Ingredient key={item._id} ingredient={item} />
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </section>
  );
};

export default BurgerIngredients;
