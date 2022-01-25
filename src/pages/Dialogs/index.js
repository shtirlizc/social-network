import React, { useRef } from "react";

import DialogItem from "./DialogItem";
import Message from "./Message";

import s from "./Dialogs.module.scss";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

const Dialogs = (props) => {
  const { state } = props;
  const { dialogs, messages } = state;
  const messageRef = useRef(null);

  const handleSubmitMessage = (event) => {
    event.preventDefault();
    console.log("###: ", messageRef.current.value);
  };

  const dialogsElements = dialogs.map(({ id, name, avatar }) => (
    <DialogItem key={id} id={id} name={name} avatar={avatar} />
  ));
  const messagesElements = messages.map(({ id, message, isMineMessage }) => (
    <Message key={id} message={message} isMe={isMineMessage} />
  ));

  return (
    <div className={s.root}>
      <div className={s.dialogs}>{dialogsElements}</div>
      <div className={s.messages}>
        <div className={s.messagesList}>{messagesElements}</div>

        <form action="" className={s.messagesForm} onSubmit={handleSubmitMessage}>
          <TextField
            name="message"
            id="message"
            placeholder="Your message..."
            isTextArea
            refValue={messageRef}
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
};

export default Dialogs;
