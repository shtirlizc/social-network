import API from "../../api";

const PREFIX = "USERS_";

const SET_USERS = `${PREFIX}SET_USERS`;
const FOLLOW = `${PREFIX}FOLLOW`;
const UNFOLLOW = `${PREFIX}UNFOLLOW`;
const SET_TOTAL_COUNT = `${PREFIX}SET_TOTAL_COUNT`;
const SET_CURRENT_PAGE = `${PREFIX}SET_CURRENT_PAGE`;
const SET_IS_FETCHING = `${PREFIX}SET_IS_FETCHING`;
const TOGGLE_FOLLOWING_IN_PROGRESS = `${PREFIX}TOGGLE_FOLLOWING_IN_PROGRESS`;

const initialState = {
  users: [],
  isFetching: false,
  totalUsersCount: 0,
  currentPage: 1,
  pageSize: 100,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USERS:
      return { ...state, users: [...payload.users] };

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

    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: payload.isFollowing
          ? [...state.followingInProgress, payload.userId]
          : state.followingInProgress.filter((userId) => userId !== payload.userId),
      };

    default:
      return state;
  }
};

// action creators

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: {
    users,
  },
});

export const followSuccess = (userId) => ({
  type: FOLLOW,
  payload: {
    userId,
  },
});
export const unFollowSuccess = (userId) => ({
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

export const toggleFollowingInProgress = (isFollowing, userId) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  payload: {
    isFollowing,
    userId,
  },
});

// thunk creators

export const getUsers = (pageSize, currentPage) => (dispatch) => {
  dispatch(setIsFetching(true));
  dispatch(setCurrentPage(currentPage));

  API.users.getUsers(pageSize, currentPage).then((data) => {
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setIsFetching(false));
  });
};

export const follow = (userId) => (dispatch) => {
  dispatch(toggleFollowingInProgress(true, userId));
  API.follow.follow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(followSuccess(userId));
      dispatch(toggleFollowingInProgress(false, userId));
    }
  });
};

export const unFollow = (userId) => (dispatch) => {
  dispatch(toggleFollowingInProgress(true, userId));
  API.follow.unFollow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(unFollowSuccess(userId));
      dispatch(toggleFollowingInProgress(false, userId));
    }
  });
};

export default usersReducer;
