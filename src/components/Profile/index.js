import React from "react";
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
  const { state } = props;
  const { posts, info } = state;

  return (
    <>
      <ProfileInfo state={info} />
      <MyPosts posts={posts} />
    </>
  );
};

export default Profile;
