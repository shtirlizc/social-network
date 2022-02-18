import React from "react";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import NewPostContainer from "./NewPost/NewPostContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

import s from "./Profile.module.scss";

const Profile = () => {
  return (
    <>
      <ProfileInfoContainer />
      <div className={s.posts}>
        <NewPostContainer />
        <MyPostsContainer />
      </div>
    </>
  );
};

export default Profile;
