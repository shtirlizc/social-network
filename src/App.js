import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings";

import "./App.css";

const App = (props) => {
  const { state } = props;
  const { profilePage, dialogsPage, sidebar } = state;

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar state={sidebar} />

        <main className="app-content">
          <Route
            path="/profile"
            render={() => <Profile state={profilePage} />}
          />
          <Route
            path="/dialogs"
            render={() => <Dialogs state={dialogsPage} />}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
