import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./index.css";

export const rerenderAllTree = (state, addPost, typeNewPost) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} typeNewPost={typeNewPost} />
    </React.StrictMode>,
    document.getElementById("root"),
  );
};
