import React from "react";
import ProfileInfo from "./ProfileInfo";
import NewPost from "./NewPost";
import MyPosts from "./MyPosts";

import s from "./Profile.module.scss";

const Profile = (props) => {
  const { state, dispatch } = props;
  const { posts, newPostText, info } = state;

  return (
    <>
      <ProfileInfo state={info} />
      <div className={s.posts}>
        <NewPost newPostText={newPostText} dispatch={dispatch} />
        <MyPosts posts={posts} />
      </div>
    </>
  );
};

export default Profile;
