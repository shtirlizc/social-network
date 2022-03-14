import { combineReducers, createStore } from "redux";

import profileReducer from "./reducers/profile";
import dialogsReducer from "./reducers/dialogs";
import usersReducer from "./reducers/users";
import sidebarReducer from "./reducers/sidebar";
import friendsReducer from "./reducers/friends";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  friends: friendsReducer,
});

const store = createStore(reducers);

export default store;
