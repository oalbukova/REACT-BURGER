// react redux types
import React, {useEffect} from "react";

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
      setState({...state});
      fetch(`${INGREDIENTS_URL}ingredients`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(res.status);
        })
        .then((data) => setState({...state, data: data.data}))
        .catch((err) => {
          console.log(`Ошибка выполнения запроса: ${err}`);
        });
    };
    getData();
  }, []);

  const {data} = state;

  return (
    <div className={styles.app}>
      <AppHeader/>
      <Main data={data}/>
    </div>
  );
};

export default App;
