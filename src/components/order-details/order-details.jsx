// react redux types
import React from "react";
import { useSelector } from "react-redux";

// image
import vector1 from "../../images/vector1.svg";
import vector2 from "../../images/vector2.svg";
import vector3 from "../../images/vector3.svg";
import stroke from "../../images/stroke.svg";

//styles
import styles from "./order-details.module.css";

const OrderDetails = () => {
  const { order } = useSelector((state) => state.orderReducer);

  return (
    <div className={`${styles.orderDetails} pt-20 pb-15`}>
      <h2 className={`${styles.title} text text_type_digits-large mb-8`}>
        {order.number}
      </h2>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <div className={`${styles.image} mt-15 mb-15`}>
        <img src={vector1} className={`${styles.vector1}`} alt="готово" />
        <img src={vector2} className={`${styles.vector2}`} alt="готово" />
        <img src={vector3} className={`${styles.vector3}`} alt="готово" />
        <img src={stroke} className={`${styles.stroke} `} alt="готово" />
      </div>
      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export default OrderDetails;
