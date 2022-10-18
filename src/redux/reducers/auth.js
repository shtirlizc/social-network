const PREFIX = "AUTH_";

const SET_USER = `${PREFIX}SET_USER`;
const SET_IS_FETCHING = `${PREFIX}SET_IS_FETCHING`;
const SET_PROFILE = `${PREFIX}SET_PROFILE`;

const initialState = {
  authData: null,
  isFetching: false,
  isAuth: false,
  profileData: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return { ...state, authData: payload.authData, isAuth: true };

    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: payload.isFetching,
      };

    case SET_PROFILE:
      return {
        ...state,
        profileData: payload.profileData,
      };

    default:
      return state;
  }
};

export const setAuthUser = ({ id, email, login }) => ({
  type: SET_USER,
  payload: {
    authData: {
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

export const setProfile = (profileData) => ({
  type: SET_PROFILE,
  payload: {
    profileData,
  },
});

export default authReducer;
