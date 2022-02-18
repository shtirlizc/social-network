import React from "react";

import Dialogs from "./index";
import { addMessageActionCreator, typeNewMessageActionCreator } from "../../redux/reducers/dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
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
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
