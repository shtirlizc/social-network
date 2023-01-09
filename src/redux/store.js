import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import authReducer from "./reducers/auth";
import profileReducer from "./reducers/profile";
import dialogsReducer from "./reducers/dialogs";
import usersReducer from "./reducers/users";
import sidebarReducer from "./reducers/sidebar";
import friendsReducer from "./reducers/friends";

const reducers = combineReducers({
  authUser: authReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  friends: friendsReducer,
});

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
