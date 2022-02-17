import ReactDOM from "react-dom";
import React from "react";

import App from "./App";
import store from "./redux/store";

import "./index.css";

const renderAllTree = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById("root"),
  );
};

renderAllTree(store);
store.subscribe(() => {
  renderAllTree(store);
});
