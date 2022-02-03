import React from "react";

import Button from "../../../components/Button";
import TextField from "../../../components/TextField";
import { addPostActionCreator, typeNewPostActionCreator } from "../../../redux/store";

import s from "./MyPosts.module.scss";

const NewPost = (props) => {
  const { newPostText, dispatch } = props;

  const handleSubmitPost = (event) => {
    event.preventDefault();
    dispatch(addPostActionCreator());
  };

  const handleType = (event) => {
    dispatch(typeNewPostActionCreator(event.target.value));
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
