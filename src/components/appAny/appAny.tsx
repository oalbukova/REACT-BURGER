// react redux types
import React from "react";

//components
import AppHeader from "../app-header/app-header";
import Main from "../any/any";

// styles
import styles from "./appAny.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <Main />
    </div>
  );
};

export default App;
