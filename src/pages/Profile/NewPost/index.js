import React from "react";

import Button from "../../../components/Button";
import TextField from "../../../components/TextField";

import s from "./MyPosts.module.scss";

const NewPost = () => {
  return (
    <div className={s.root}>
      <form action="" className={s.form}>
        <TextField name="message" id="message" placeholder="Your news..." isTextArea />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default NewPost;
