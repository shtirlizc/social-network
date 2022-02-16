const ADD_POST = "ADD_POST";
const TYPE_NEW_POST = "TYPE_NEW_POST";

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
  info: {
    name: "Marat S.",
    avatar:
      "https://sun9-47.userapi.com/impg/rTgw7T7n13coqYr4RBTihjxnUCwjyqdyVk7_jQ/MsfZ_BSiDGc.jpg?size=519x400&quality=96&proxy=1&sign=f1c988783fd5cce0d899203b5c958130&type=album",
    bg: "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
    birthday: "18th April",
    city: "Ufa",
    education: "USATU",
    webSite: "shtirlizc.ru",
  },
};

const profileReducer = (state = initialState, action) => {
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
