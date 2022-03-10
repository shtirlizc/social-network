import { connect } from "react-redux";

import NewPost from "./index";
import { addPostActionCreator, typeNewPostActionCreator } from "../../../redux/reducers/profile";

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmitPost: () => {
      dispatch(addPostActionCreator());
    },
    handleType: (value) => {
      dispatch(typeNewPostActionCreator(value));
    },
  };
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
