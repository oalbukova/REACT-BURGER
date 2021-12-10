// react redux types
import React from "react";
//import PropTypes from "prop-types";

// image
import done from '../../images/done.png'

//styles
import styles from "./order-details.module.css";

// type Props = {
//  // children: React.ReactElement;
//   handleClose: () => void;
// };

const OrderDetails = () => {
  // const { handleClose } = props;

  return (
  <div className={`${styles.orderDetails} pt-20 pb-15`}>
    <h2 className={`${styles.title} text text_type_digits-large mb-8`}>034536</h2>
    <p className="text text_type_main-medium">идентификатор заказа</p>
    <img src={done} className={`${styles.image} mt-15 mb-15`} alt='готово' />
    <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
    <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
  </div>);
};

export default OrderDetails;
