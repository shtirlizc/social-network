import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./modules/Header";
import Sidebar from "./modules/Sidebar";
import Profile from "./pages/Profile";
import Dialogs from "./pages/Dialogs";
import News from "./pages/News";
import Music from "./pages/Music";
import Settings from "./pages/Settings";

import "./App.css";

const App = (props) => {
  const { state, addPost } = props;
  const { profilePage, dialogsPage, sidebar } = state;

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar state={sidebar} />

        <main className="app-content">
          <Route path="/profile" render={() => <Profile state={profilePage} addPost={addPost} />} />
          <Route path="/dialogs" render={() => <Dialogs state={dialogsPage} />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
