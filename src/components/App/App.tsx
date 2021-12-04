// react redux types
import React from "react";

//components
import AppHeader from "../app-header/app-header";
import Main from "../main/main";

// styles
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <Main />
    </div>
  );
};

export default App;
