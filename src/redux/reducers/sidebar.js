const initialState = [
  { id: 1, link: "profile", text: "Profile" },
  { id: 2, link: "dialogs", text: "Messages" },
  { id: 3, link: "users", text: "Users" },
  { id: 4, link: "news", text: "News" },
  { id: 5, link: "music", text: "Music" },
  { id: 6, link: "settings", text: "Settings" },
];

const sidebarReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

export default sidebarReducer;
