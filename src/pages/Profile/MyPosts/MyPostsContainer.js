import React from "react";

import MyPosts from "./index";

const MyPostsContainer = (props) => {
  const { store } = props;
  const state = store.getState();
  const { posts } = state.profilePage;

  return <MyPosts posts={posts} />;
};

export default MyPostsContainer;
