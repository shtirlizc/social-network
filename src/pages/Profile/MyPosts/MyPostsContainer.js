import { connect } from "react-redux";

import MyPosts from "./index";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

const MyPostsContainer = connect(mapStateToProps)(MyPosts);

export default MyPostsContainer;
