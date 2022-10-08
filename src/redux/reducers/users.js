const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_IS_FETCHING = "SET_IS_FETCHING";

const initialState = {
  users: [],
  isFetching: false,
  totalUsersCount: 0,
  currentPage: 1,
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

    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: payload.totalCount,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload.pageNumber,
      };

    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: payload.isFetching,
      };

    default:
      return state;
  }
};

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: {
    users,
  },
});

export const follow = (userId) => ({
  type: FOLLOW,
  payload: {
    userId,
  },
});
export const unfollow = (userId) => ({
  type: UNFOLLOW,
  payload: {
    userId,
  },
});

export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  payload: {
    totalCount,
  },
});

export const setCurrentPage = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  payload: {
    pageNumber,
  },
});

export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  payload: {
    isFetching,
  },
});

export default usersReducer;
