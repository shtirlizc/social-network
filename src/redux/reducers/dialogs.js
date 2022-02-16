const ADD_MESSAGE = "ADD_MESSAGE";
const TYPE_NEW_MESSAGE = "TYPE_NEW_MESSAGE";

const dialogsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: 5,
        message: state.newMessageText,
        isMineMessage: true,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";

      return state;

    case TYPE_NEW_MESSAGE:
      state.newMessageText = payload.message;

      return state;

    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});
export const typeNewMessageActionCreator = (message) => ({
  type: TYPE_NEW_MESSAGE,
  payload: {
    message,
  },
});

export default dialogsReducer;
