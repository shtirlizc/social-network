import React from "react";
import ProfileInfo from "./ProfileInfo";
import NewPost from "./NewPost";
import MyPosts from "./MyPosts";

import s from "./Profile.module.scss";

const Profile = () => {
  return (
    <>
      <ProfileInfo />
      <div className={s.posts}>
        <NewPost />
        <MyPosts />
      </div>
    </>
  );
};

export default Profile;
