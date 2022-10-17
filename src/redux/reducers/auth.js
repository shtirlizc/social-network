const SET_AUTH_USER = "SET_AUTH_USER";
const SET_IS_FETCHING = "SET_IS_FETCHING";

const initialState = {
  userData: null,
  isFetching: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_AUTH_USER:
      return { ...state, userData: payload.userData, isAuth: true };

    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: payload.isFetching,
      };

    default:
      return state;
  }
};

export const setAuthUser = ({ id, email, login }) => ({
  type: SET_AUTH_USER,
  payload: {
    userData: {
      id,
      email,
      login,
    },
  },
});

export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  payload: {
    isFetching,
  },
});

export default authReducer;
