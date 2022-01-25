import React from "react";
import ProfileInfo from "./ProfileInfo";
import NewPost from "./NewPost";
import MyPosts from "./MyPosts";

import s from "./Profile.module.scss";

const Profile = (props) => {
  const { state } = props;
  const { posts, info } = state;

  return (
    <>
      <ProfileInfo state={info} />
      <div className={s.posts}>
        <NewPost />
        <MyPosts posts={posts} />
      </div>
    </>
  );
};

export default Profile;
