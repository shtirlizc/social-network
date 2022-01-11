import React from "react";
import classNames from "classnames";

import s from "./Message.module.css";

const Message = (props) => {
  const { message, isMe } = props;
  const userPhoto = isMe
    ? "https://sun9-47.userapi.com/impg/rTgw7T7n13coqYr4RBTihjxnUCwjyqdyVk7_jQ/MsfZ_BSiDGc.jpg?size=519x400&quality=96&proxy=1&sign=f1c988783fd5cce0d899203b5c958130&type=album"
    : "https://sun7-8.userapi.com/impg/wW1hjmJFVNFEZpLYwcwiKcGLpHB9tCF0wn2Fmw/-0FZtDc20MI.jpg?size=100x0&quality=96&crop=0,399,1439,1439&sign=426301f8ede0a53b9146b68e45a9ce78&ava=1";

  return (
    <div className={classNames(s.messageItem, isMe && s.messageItemMine)}>
      <p className={s.messageText}>{message}</p>
      <div className={s.messageAuthor}>
        <img src={userPhoto} alt="" />
      </div>
    </div>
  );
};

export default Message;
