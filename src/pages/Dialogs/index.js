import React from "react";

import TextField from "../../components/TextField";
import Button from "../../components/Button";
import DialogItem from "./DialogItem";
import Message from "./Message";

import s from "./Dialogs.module.scss";

const Dialogs = (props) => {
  const { friends, messages, newMessageText, handleSubmitMessage, handleUpdateNewMessage } = props;

  const onSubmitMessage = (event) => {
    event.preventDefault();
    handleSubmitMessage();
  };

  const onUpdateNewMessage = (event) => {
    handleUpdateNewMessage(event.target.value);
  };

  const dialogsElements = friends.map(({ id, name, avatar }) => (
    <DialogItem key={id} id={id} name={name} avatar={avatar} />
  ));
  const messagesElements = messages.map(({ id, message, isMineMessage }) => (
    <Message key={id} message={message} isMe={isMineMessage} />
  ));

  return (
    <div className={s.root}>
      <div className={s.dialogs}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>

        <form className={s.messagesForm} onSubmit={onSubmitMessage}>
          <TextField
            name="message"
            id="message"
            placeholder="Your message..."
            value={newMessageText}
            onChange={onUpdateNewMessage}
            isTextArea
          />
          <Button type="submit" disabled={!newMessageText}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Dialogs;
