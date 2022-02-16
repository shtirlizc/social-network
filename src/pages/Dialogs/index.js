import React from "react";

import DialogItem from "./DialogItem";
import Message from "./Message";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { addMessageActionCreator, typeNewMessageActionCreator } from "../../redux/reducers/dialogs";

import s from "./Dialogs.module.scss";

const Dialogs = (props) => {
  const { state, friends, dispatch } = props;
  const { messages, newMessageText } = state;

  const handleSubmitMessage = (event) => {
    event.preventDefault();
    dispatch(addMessageActionCreator());
  };

  const handleUpdateNewMessage = (event) => {
    dispatch(typeNewMessageActionCreator(event.target.value));
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

        <form className={s.messagesForm} onSubmit={handleSubmitMessage}>
          <TextField
            name="message"
            id="message"
            placeholder="Your message..."
            value={newMessageText}
            onChange={handleUpdateNewMessage}
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
