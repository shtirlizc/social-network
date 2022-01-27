import React from "react";

import Button from "../../../components/Button";
import TextField from "../../../components/TextField";

import s from "./MyPosts.module.scss";

const NewPost = (props) => {
  const { newPostText, typeNewPost, addPost } = props;

  const handleSubmitPost = (event) => {
    event.preventDefault();
    addPost(newPostText);
  };

  const handleType = (event) => {
    typeNewPost(event.target.value);
  };

  return (
    <div className={s.root}>
      <form action="" className={s.form} onSubmit={handleSubmitPost}>
        <TextField
          name="message"
          id="message"
          placeholder="Your news..."
          value={newPostText}
          onChange={handleType}
          isTextArea
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default NewPost;
