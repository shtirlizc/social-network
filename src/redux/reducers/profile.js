const ADD_POST = "ADD_POST";
const TYPE_NEW_POST = "TYPE_NEW_POST";

const profileReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";

      return state;

    case TYPE_NEW_POST:
      state.newPostText = payload.post;

      return state;

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const typeNewPostActionCreator = (post) => ({
  type: TYPE_NEW_POST,
  payload: {
    post,
  },
});

export default profileReducer;
