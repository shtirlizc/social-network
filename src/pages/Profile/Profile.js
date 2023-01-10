import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ProfileInfo from "./ProfileInfo";
import NewPost from "./NewPost";
import MyPosts from "./MyPosts";
import { matchType, profileType } from "../../types";

import s from "./Profile.module.scss";

const Profile = ({ profile, authProfile, match }) => {
  const { userId } = match.params;

  const posts = (
    <div className={s.posts}>
      <NewPost />
      <MyPosts />
    </div>
  );

  if (userId && profile) {
    return (
      <>
        <ProfileInfo profile={profile} />
        {posts}
      </>
    );
  }

  if (!userId && authProfile) {
    return (
      <>
        <ProfileInfo profile={authProfile} />
        {posts}
      </>
    );
  }

  return <h2>Profile data no such</h2>;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  authProfile: state.authUser.profileData,
});

Profile.defaultProps = {
  profile: null,
  authProfile: null,
};

Profile.propTypes = {
  profile: PropTypes.exact(profileType),
  authProfile: PropTypes.exact(profileType),
  match: PropTypes.exact(matchType).isRequired,
};

export default connect(mapStateToProps)(Profile);
