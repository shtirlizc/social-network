import React from "react";

import ProfileInfo from "./index";

const ProfileInfoContainer = (props) => {
  const { store } = props;
  const state = store.getState();
  const { info } = state.profilePage;

  return <ProfileInfo info={info} />;
};

export default ProfileInfoContainer;
