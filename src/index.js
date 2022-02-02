import ReactDOM from "react-dom";
import React from "react";

import App from "./App";
import store from "./redux/store";

import "./index.css";

const renderAllTree = (store) => {
  const state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        typeNewPost={store.typeNewPost.bind(store)}
        addMessage={store.addMessage.bind(store)}
        typeNewMessage={store.typeNewMessage.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById("root"),
  );
};

renderAllTree(store);
store.subscribe(renderAllTree);
