import React from "react";

import s from "./MyPosts.module.css";
import Post from "./Post";

const MyPosts = (props) => {
  const { posts } = props;
  const postsElements = posts.map(({ id, message, likesCount }) => (
    <Post key={id} message={message} likes={likesCount} />
  ));

  return (
    <div className={s.posts}>
      <div className={s.postsNew}>
        <form action="" className={s.form}>
          <textarea name="message" id="message" placeholder="Your news..." />
          <button type="submit">Send</button>
        </form>
      </div>
      <h3 className={s.postsTitle}>My posts</h3>
      <div className={s.postsFeed}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
