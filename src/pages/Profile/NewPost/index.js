import React, { useRef } from "react";

import Button from "../../../components/Button";
import TextField from "../../../components/TextField";

import s from "./MyPosts.module.scss";

const NewPost = (props) => {
  const { addPost } = props;
  const postRef = useRef(null);

  const handleSubmitPost = (event) => {
    event.preventDefault();
    addPost(postRef.current.value);
    postRef.current.value = "";
  };

  return (
    <div className={s.root}>
      <form action="" className={s.form} onSubmit={handleSubmitPost}>
        <TextField
          name="message"
          id="message"
          placeholder="Your news..."
          isTextArea
          refValue={postRef}
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default NewPost;
