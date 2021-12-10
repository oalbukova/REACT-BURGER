// react redux types
import React, { useEffect } from "react";

//components
import AppHeader from "../app-header/app-header";
import Main from "../main/main";

// styles
import styles from "./app.module.css";

const App = () => {
  const [state, setState] = React.useState({
    data: [],
  });

  const INGREDIENTS_URL = "https://norma.nomoreparties.space/api/";

  useEffect(() => {
    const getData = () => {
      fetch(`${INGREDIENTS_URL}ingredients`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(res.status);
        })
        .then((data) => setState(data))
        .catch((err) => {
          alert(`Ошибка выполнения запроса: ${err}`);
        });
    };
    getData();
  }, []);

  const { data } = state;

  return (
    <div className={styles.app}>
      <AppHeader />
      <Main data={data} />
    </div>
  );
};

export default App;
