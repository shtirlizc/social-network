import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { addMessage, typeNewMessage } from "../../redux/reducers/dialogs";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import DialogItem from "./DialogItem";
import Message from "./Message";
import { friendItem, postItem } from "../../types";

import s from "./Dialogs.module.scss";

const Dialogs = ({
  friends,
  messages,
  newMessageText,
  handleSubmitMessage,
  handleUpdateNewMessage,
  isAuth,
}) => {
  if (!isAuth) {
    return <Redirect to="/login" />;
  }

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
          <Button htmlType="submit" disabled={!newMessageText}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { friends, dialogsPage, authUser } = state;

  return {
    friends,
    messages: dialogsPage.messages,
    newMessageText: dialogsPage.newMessageText,
    isAuth: authUser.isAuth,
  };
};

Dialogs.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact(friendItem)).isRequired,
  messages: PropTypes.arrayOf(PropTypes.exact(postItem)).isRequired,
  newMessageText: PropTypes.string.isRequired,
  isAuth: PropTypes.bool.isRequired,
  handleSubmitMessage: PropTypes.func.isRequired,
  handleUpdateNewMessage: PropTypes.func.isRequired,
};

const DialogsContainer = connect(mapStateToProps, {
  handleSubmitMessage: addMessage,
  handleUpdateNewMessage: typeNewMessage,
})(Dialogs);

export default DialogsContainer;
