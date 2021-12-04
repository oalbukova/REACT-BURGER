// react redux types
import React from "react";
import PropTypes from "prop-types";

// styles
import styles from "./BurgerIngredients.module.css";

// children components
import Tabs from "./Tabs/Tabs";
import Ingredient from "./Ingredient/Ingredient";

const BurgerIngredients = ({ data }: any) => {
  
  return (
    <section className={styles.burgerIngredients}>
      <Tabs />
      <div className={`${styles.container} mt-10`}>
        <h2 className={`text text_type_main-medium`}>Булки</h2>
        <ul className={`${styles.list} mt-6 mb-10 ml-4 mr-2`}>
          {data
            .filter((el: any) => el.type === "bun")
            .map((item: any) => (
              <Ingredient
                key={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
        </ul>
        <h2 className={`text text_type_main-medium`}>Соусы</h2>
        <ul className={`${styles.list} mt-6 mb-10 ml-4 mr-2`}>
          {data
            .filter((el: any) => el.type === "sauce")
            .map((item: any) => (
              <Ingredient
                key={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
        </ul>
        <h2 className={`text text_type_main-medium`}>Начинки</h2>
        <ul className={`${styles.list} mt-6 mb-10 ml-4 mr-2`}>
          {data
            .filter((el: any) => el.type === "main")
            .map((item: any) => (
              <Ingredient
                key={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
        </ul>
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      proteins: PropTypes.number,
      fat: PropTypes.number,
      carbohydrates: PropTypes.number,
      calories: PropTypes.number,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      image_mobile: PropTypes.string,
      image_large: PropTypes.string,
      __v: PropTypes.number,
    }).isRequired
  ).isRequired,
};

export default BurgerIngredients;
