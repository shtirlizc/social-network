import React from "react";

import ProfileInfo from "./index";
import StoreContext from "../../../StoreContext";

const ProfileInfoContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
        const { info } = state.profilePage;

        return <ProfileInfo info={info} />;
      }}
    </StoreContext.Consumer>
  );
};

export default ProfileInfoContainer;
