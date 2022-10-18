import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Profile from "./Profile";
import { setIsFetching, setProfile } from "../../redux/reducers/profile";
import Preloader from "../../components/Preloader";
import { matchType } from "../../types";
import API from "../../api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const { handleSetIsFetching, handleSetProfile, match } = this.props;
    const { userId } = match.params;

    if (userId) {
      handleSetIsFetching(true);

      API.profile.getProfile(userId).then((data) => {
        handleSetProfile(data);
        handleSetIsFetching(false);
      });
    }
  }

  render() {
    const { isFetching } = this.props;

    if (isFetching) {
      return <Preloader />;
    }

    return <Profile />;
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.profilePage.isFetching,
});

ProfileContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  handleSetProfile: PropTypes.func.isRequired,
  handleSetIsFetching: PropTypes.func.isRequired,
  match: PropTypes.exact(matchType).isRequired,
};

export default connect(mapStateToProps, {
  handleSetProfile: setProfile,
  handleSetIsFetching: setIsFetching,
})(withRouter(ProfileContainer));
