const PREFIX = "DIALOGS_";

const ADD_MESSAGE = `${PREFIX}ADD_MESSAGE`;
const TYPE_NEW_MESSAGE = `${PREFIX}TYPE_NEW_MESSAGE`;

const initialState = {
  messages: [
    {
      id: 1,
      message: "It's great!",
      isMineMessage: true,
    },
    {
      id: 2,
      message: "Yo",
      isMineMessage: true,
    },
    {
      id: 3,
      message: "How is your it-kamasutra?",
      isMineMessage: false,
    },
    {
      id: 4,
      message: "Hi!",
      isMineMessage: false,
    },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 5,
            message: state.newMessageText,
            isMineMessage: true,
          },
        ],
        newMessageText: "",
      };

    case TYPE_NEW_MESSAGE:
      return {
        ...state,
        newMessageText: payload.message,
      };

    default:
      return state;
  }
};

export const addMessage = () => ({
  type: ADD_MESSAGE,
});
export const typeNewMessage = (message) => ({
  type: TYPE_NEW_MESSAGE,
  payload: {
    message,
  },
});

export default dialogsReducer;
