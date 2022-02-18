import ReactDOM from "react-dom";
import React from "react";

import App from "./App";
import StoreContext from "./StoreContext";
import store from "./redux/store";

import "./index.css";

const renderAllTree = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById("root"),
  );
};

renderAllTree(store);
store.subscribe(() => {
  renderAllTree(store);
});
