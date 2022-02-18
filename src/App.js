import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./modules/Header";
import SidebarContainer from "./modules/Sidebar/SidebarContainer";
import Profile from "./pages/Profile";
import DialogsContainer from "./pages/Dialogs/DialogsContainer";
import News from "./pages/News";
import Music from "./pages/Music";
import Settings from "./pages/Settings";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <SidebarContainer />

        <main className="app-content">
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={DialogsContainer} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
