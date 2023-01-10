import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter, Redirect } from "react-router-dom";

import Profile from "./Profile";
import { getProfile } from "../../redux/reducers/profile";
import Preloader from "../../components/Preloader";
import { matchType } from "../../types";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const { handleGetProfile, match } = this.props;
    const { userId } = match.params;

    if (userId) {
      handleGetProfile(userId);
    }
  }

  render() {
    const { isFetching, isAuth } = this.props;

    if (!isAuth) {
      return <Redirect to="/login" />;
    }

    if (isFetching) {
      return <Preloader />;
    }

    return <Profile />;
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.profilePage.isFetching,
  isAuth: state.authUser.isAuth,
});

ProfileContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  handleGetProfile: PropTypes.func.isRequired,
  match: PropTypes.exact(matchType).isRequired,
};

export default connect(mapStateToProps, {
  handleGetProfile: getProfile,
})(withRouter(ProfileContainer));
