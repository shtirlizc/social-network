import ReactDOM from "react-dom";
import React from "react";

import App from "./App";
import store from "./redux/store";

import "./index.css";

const renderAllTree = (store) => {
  const state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById("root"),
  );
};

renderAllTree(store);
store.subscribe(() => {
  renderAllTree(store);
});
