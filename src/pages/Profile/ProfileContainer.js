import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Profile from "./Profile";
import { setIsFetching, setProfile } from "../../redux/reducers/profile";
import Preloader from "../../components/Preloader";
import { profileType } from "../../types";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const { handleSetIsFetching, handleSetProfile, match } = this.props;
    const { userId } = match.params;

    if (userId) {
      handleSetIsFetching(true);
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then((response) => {
          if (response.status === 200) {
            handleSetProfile(response.data);
            handleSetIsFetching(false);
          }
        });
    }
  }

  render() {
    const { isFetching, profile } = this.props;

    if (isFetching || !profile) {
      return <Preloader />;
    }

    return <Profile />;
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.profilePage.isFetching,
  profile: state.profilePage.profile,
});

ProfileContainer.defaultProps = {
  profile: null,
};

ProfileContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  profile: PropTypes.exact(profileType),
  handleSetProfile: PropTypes.func.isRequired,
  handleSetIsFetching: PropTypes.func.isRequired,
  match: PropTypes.exact({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.exact({
      userId: PropTypes.string,
    }).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, {
  handleSetProfile: setProfile,
  handleSetIsFetching: setIsFetching,
})(withRouter(ProfileContainer));
