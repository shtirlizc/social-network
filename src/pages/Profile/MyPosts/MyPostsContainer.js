import React from "react";

import MyPosts from "./index";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
        const { posts } = state.profilePage;

        return <MyPosts posts={posts} />;
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
