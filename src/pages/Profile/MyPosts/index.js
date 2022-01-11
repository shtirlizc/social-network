import React from "react";

import Post from "./Post";
import Button from "../../../components/Button";
import TextField from "../../../components/TextField";

import s from "./MyPosts.module.scss";

const MyPosts = (props) => {
  const { posts } = props;
  const postsElements = posts.map(({ id, message, likesCount }) => (
    <Post key={id} message={message} likes={likesCount} />
  ));

  return (
    <div className={s.posts}>
      <div className={s.postsNew}>
        <form action="" className={s.form}>
          <TextField name="message" id="message" placeholder="Your news..." isTextArea />
          <Button type="submit">Send</Button>
        </form>
      </div>
      <h3 className={s.postsTitle}>My posts</h3>
      <div className={s.postsFeed}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
