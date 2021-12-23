// react redux types
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./services/store";

// styles
import "./index.css";

// children components
import App from "./components/app/app";

// utils
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
