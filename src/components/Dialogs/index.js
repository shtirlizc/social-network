import React from "react";
import DialogItem from "./DialogItem";
import Message from "./Message";

import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  const { state } = props;
  const { dialogs, messages } = state;

  const dialogsElements = dialogs.map(({ id, name, avatar }) => (
    <DialogItem key={id} id={id} name={name} avatar={avatar} />
  ));
  const messagesElements = messages.map(({ id, message, isMineMessage }) => (
    <Message key={id} message={message} isMe={isMineMessage} />
  ));

  return (
    <div className={s.root}>
      <div className={s.dialogs}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
