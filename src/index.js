import state, { subscribe, addPost, typeNewPost, addMessage, typeNewMessage } from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

import "./index.css";

const rerenderAllTree = (state, addPost, typeNewPost, addMessage, typeNewMessage) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        typeNewPost={typeNewPost}
        addMessage={addMessage}
        typeNewMessage={typeNewMessage}
      />
    </React.StrictMode>,
    document.getElementById("root"),
  );
};

rerenderAllTree(state, addPost, typeNewPost, addMessage, typeNewMessage);
subscribe(rerenderAllTree);
