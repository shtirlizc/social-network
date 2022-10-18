const PREFIX = "PROFILE_";

const ADD_POST = `${PREFIX}ADD_POST`;
const TYPE_NEW_POST = `${PREFIX}TYPE_NEW_POST`;
const SET_PROFILE = `${PREFIX}SET_PROFILE`;
const SET_IS_FETCHING = `${PREFIX}SET_IS_FETCHING`;

const initialState = {
  posts: [
    {
      id: 1,
      message: "Hi, how are you?",
      likesCount: 12,
    },
    {
      id: 2,
      message: "Yo yo yo",
      likesCount: 1024,
    },
    {
      id: 3,
      message: "Yo",
      likesCount: 111,
    },
    {
      id: 4,
      message: "It's, my first post",
      likesCount: 11,
    },
  ],
  newPostText: "",
  profile: null,
  isFetching: false,
};

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: payload.profile,
      };

    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: payload.isFetching,
      };

    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 5, message: state.newPostText, likesCount: 0 }],
        newPostText: "",
      };

    case TYPE_NEW_POST:
      return {
        ...state,
        newPostText: payload.post,
      };

    default:
      return state;
  }
};

export const addPost = () => ({
  type: ADD_POST,
});
export const typeNewPost = (post) => ({
  type: TYPE_NEW_POST,
  payload: {
    post,
  },
});
export const setProfile = (profile) => ({
  type: SET_PROFILE,
  payload: {
    profile,
  },
});
export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  payload: {
    isFetching,
  },
});

export default profileReducer;
