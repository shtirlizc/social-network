import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Post from "./Post";
import { postItem } from "../../../types";

import s from "./MyPosts.module.scss";

const MyPosts = ({ posts }) => {
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

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
});

MyPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.exact(postItem)).isRequired,
};

const MyPostsContainer = connect(mapStateToProps)(MyPosts);

export default MyPostsContainer;
