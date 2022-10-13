import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./modules/Header";
import Sidebar from "./modules/Sidebar";
import Profile from "./pages/Profile/ProfileContainer";
import Dialogs from "./pages/Dialogs";
import Users from "./pages/Users/UsersContainer";
import News from "./pages/News";
import Music from "./pages/Music";
import Settings from "./pages/Settings";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Sidebar />

      <main className="app-content">
        <Route path="/profile/:userId" component={Profile} />
        <Route path="/dialogs" component={Dialogs} />
        <Route path="/users" component={Users} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </main>
    </div>
  </BrowserRouter>
);

export default App;
