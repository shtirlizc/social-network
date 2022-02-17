import React from "react";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import NewPostContainer from "./NewPost/NewPostContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

import s from "./Profile.module.scss";

const Profile = (props) => {
  const { store } = props;

  return (
    <>
      <ProfileInfoContainer store={store} />
      <div className={s.posts}>
        <NewPostContainer store={store} />
        <MyPostsContainer store={store} />
      </div>
    </>
  );
};

export default Profile;
