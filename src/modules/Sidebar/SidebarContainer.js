import React from "react";

import Sidebar from "./index";
import StoreContext from "../../StoreContext";

const SidebarContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
        const { sidebar, friends } = state;

        return <Sidebar sidebar={sidebar} friends={friends} />;
      }}
    </StoreContext.Consumer>
  );
};

export default SidebarContainer;
