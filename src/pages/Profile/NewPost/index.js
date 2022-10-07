import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addPostActionCreator, typeNewPostActionCreator } from "../../../redux/reducers/profile";
import Button from "../../../components/Button";
import TextField from "../../../components/TextField";

import s from "./MyPosts.module.scss";

const NewPost = (props) => {
  const { newPostText, handleSubmitPost, handleType } = props;

  const onSubmitPost = (event) => {
    event.preventDefault();
    handleSubmitPost();
  };

  const onType = (event) => {
    handleType(event.target.value);
  };

  return (
    <div className={s.root}>
      <form className={s.form} onSubmit={onSubmitPost}>
        <TextField
          name="message"
          id="message"
          placeholder="Your news..."
          value={newPostText}
          onChange={onType}
          isTextArea
        />
        <Button htmlType="submit" disabled={!newPostText}>
          Send
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmitPost: () => {
    dispatch(addPostActionCreator());
  },
  handleType: (value) => {
    dispatch(typeNewPostActionCreator(value));
  },
});

NewPost.propTypes = {
  newPostText: PropTypes.string.isRequired,
  handleType: PropTypes.func.isRequired,
  handleSubmitPost: PropTypes.func.isRequired,
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
