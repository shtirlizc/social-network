import React from "react";

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

export default MyPosts;
