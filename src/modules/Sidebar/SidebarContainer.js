import { connect } from "react-redux";

import Sidebar from "./index";

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
    friends: state.friends,
  };
};

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;
