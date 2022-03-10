import { connect } from "react-redux";

import Dialogs from "./index";
import { addMessageActionCreator, typeNewMessageActionCreator } from "../../redux/reducers/dialogs";

const mapStateToProps = (state) => {
  const { friends, dialogsPage } = state;

  return {
    friends,
    messages: dialogsPage.messages,
    newMessageText: dialogsPage.newMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmitMessage: () => {
      dispatch(addMessageActionCreator());
    },
    handleUpdateNewMessage: (value) => {
      dispatch(typeNewMessageActionCreator(value));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
