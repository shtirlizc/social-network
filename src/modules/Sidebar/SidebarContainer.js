import React from "react";

import Sidebar from "./index";

const SidebarContainer = (props) => {
  const { store } = props;
  const state = store.getState();
  const { sidebar, friends } = state;

  return <Sidebar sidebar={sidebar} friends={friends} />;
};

export default SidebarContainer;
