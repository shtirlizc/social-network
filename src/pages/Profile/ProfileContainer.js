import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

import Profile from "./Profile";
import { getProfile } from "../../redux/reducers/profile";
import Preloader from "../../components/Preloader";
import { matchType } from "../../types";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const { handleGetProfile, match } = this.props;
    const { userId } = match.params;

    if (userId) {
      handleGetProfile(userId);
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
  handleGetProfile: PropTypes.func.isRequired,
  match: PropTypes.exact(matchType).isRequired,
};

export default compose(
  connect(mapStateToProps, {
    handleGetProfile: getProfile,
  }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
