// react redux types
import React, { useState } from "react";

// ui-components
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const Tabs = () => {
  const [current, setCurrent] = useState("bun");
  return (
    <div style={{ display: "flex" }}>
      <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="sauces" active={current === "sauces"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="topping" active={current === "topping"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
};

export default Tabs;
