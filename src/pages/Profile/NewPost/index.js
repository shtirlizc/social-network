import React from "react";

import Button from "../../../components/Button";
import TextField from "../../../components/TextField";

import s from "./MyPosts.module.scss";

const NewPost = (props) => {
  const { newPostText, handleSubmitPost, handleType } = props;

  const onSubmitPost = (event) => {
    event.preventDefault();
    handleSubmitPost();
  };

  const onType = (event) => {
    handleType(event.target.value);
  };

  return (
    <div className={s.root}>
      <form className={s.form} onSubmit={onSubmitPost}>
        <TextField
          name="message"
          id="message"
          placeholder="Your news..."
          value={newPostText}
          onChange={onType}
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
