import React from "react";

import NewPost from "./index";
import { addPostActionCreator, typeNewPostActionCreator } from "../../../redux/reducers/profile";
import StoreContext from "../../../StoreContext";

const NewPostContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
        const { dispatch } = store;
        const { newPostText } = state.profilePage;

        const handleSubmitPost = () => {
          dispatch(addPostActionCreator());
        };

        const handleType = (value) => {
          dispatch(typeNewPostActionCreator(value));
        };

        return (
          <NewPost
            newPostText={newPostText}
            handleSubmitPost={handleSubmitPost}
            handleType={handleType}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default NewPostContainer;
