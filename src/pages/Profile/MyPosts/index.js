import React from "react";
import { connect } from "react-redux";

import Post from "./Post";

import s from "./MyPosts.module.scss";

const MyPosts = (props) => {
  const { posts } = props;
  const postsElements = posts.map(({ id, message, likesCount }) => (
    <Post key={id} message={message} likes={likesCount} />
  ));

  return (
    <>
      <h3 className={s.postsTitle}>My posts</h3>
      <div className={s.postsFeed}>{postsElements}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

const MyPostsContainer = connect(mapStateToProps)(MyPosts);

export default MyPostsContainer;
