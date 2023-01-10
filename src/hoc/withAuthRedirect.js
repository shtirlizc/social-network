import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const withAuthRedirect = (WrappedComponent) => {
  const RedirectHOC = (props) => {
    const { isAuth } = props;

    if (!isAuth) {
      return <Redirect to="/login" />;
    }

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...props} />;
  };

  const mapStateToProps = (state) => ({
    isAuth: state.authUser.isAuth,
  });

  RedirectHOC.propTypes = {
    isAuth: PropTypes.bool.isRequired,
  };

  return connect(mapStateToProps)(RedirectHOC);
};

export default withAuthRedirect;
