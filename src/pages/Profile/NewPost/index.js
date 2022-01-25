import React, { useRef } from "react";

import Button from "../../../components/Button";
import TextField from "../../../components/TextField";

import s from "./MyPosts.module.scss";

const NewPost = () => {
  const postRef = useRef(null);

  const handleSubmitPost = (event) => {
    event.preventDefault();
    console.log("###: ", postRef.current.value);
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
