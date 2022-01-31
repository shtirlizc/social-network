import React from "react";

import Button from "../../../components/Button";
import TextField from "../../../components/TextField";

import s from "./MyPosts.module.scss";

const NewPost = (props) => {
  const { newPostText, typeNewPost, addPost } = props;

  const handleSubmitPost = (event) => {
    event.preventDefault();
    addPost();
  };

  const handleType = (event) => {
    typeNewPost(event.target.value);
  };

  return (
    <div className={s.root}>
      <form className={s.form} onSubmit={handleSubmitPost}>
        <TextField
          name="message"
          id="message"
          placeholder="Your news..."
          value={newPostText}
          onChange={handleType}
          isTextArea
        />
        <Button type="submit" disabled={!newPostText}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default NewPost;
