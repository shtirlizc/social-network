const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USERS:
      return { ...state, users: payload.users };

    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === payload.userId) {
            return { ...user, followed: true };
          }

          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === payload.userId) {
            return { ...user, followed: false };
          }

          return user;
        }),
      };

    default:
      return state;
  }
};

export const setUsersActionCreator = (users) => ({
  type: SET_USERS,
  payload: {
    users,
  },
});
export const followActionCreator = (userId) => ({
  type: FOLLOW,
  payload: {
    userId,
  },
});
export const unfollowActionCreator = (userId) => ({
  type: UNFOLLOW,
  payload: {
    userId,
  },
});

export default usersReducer;
