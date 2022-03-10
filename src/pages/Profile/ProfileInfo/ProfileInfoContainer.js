import { connect } from "react-redux";

import ProfileInfo from "./index";

const mapStateToProps = (state) => {
  return {
    info: state.profilePage.info,
  };
};

const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);

export default ProfileInfoContainer;
