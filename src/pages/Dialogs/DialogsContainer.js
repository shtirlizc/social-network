import React from "react";

import Dialogs from "./index";
import { addMessageActionCreator, typeNewMessageActionCreator } from "../../redux/reducers/dialogs";

const DialogsContainer = (props) => {
  const { store } = props;
  const state = store.getState();
  const { dispatch } = store;
  const { friends } = state;
  const { messages, newMessageText } = state.dialogsPage;

  const handleSubmitMessage = () => {
    dispatch(addMessageActionCreator());
  };

  const handleUpdateNewMessage = (value) => {
    dispatch(typeNewMessageActionCreator(value));
  };

  return (
    <Dialogs
      friends={friends}
      messages={messages}
      newMessageText={newMessageText}
      handleSubmitMessage={handleSubmitMessage}
      handleUpdateNewMessage={handleUpdateNewMessage}
    />
  );
};

export default DialogsContainer;
