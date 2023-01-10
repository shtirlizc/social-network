import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getAuthMe } from "../../redux/reducers/auth";
import Preloader from "../../components/Preloader";

import s from "./Login.module.scss";

class Login extends React.Component {
  componentDidMount() {
    const { handleGetAuthMe } = this.props;

    handleGetAuthMe();
  }

  render() {
    const { isAuth, isFetching } = this.props;

    if (isFetching) {
      return <Preloader />;
    }

    return isAuth ? (
      <h1 className={s.root}>Login Page</h1>
    ) : (
      <a
        href="https://social-network.samuraijs.com/login"
        target="_blank"
        rel="noopener noreferrer">
        Go to login and reload this page
      </a>
    );
  }
}

const mapStateToProps = (state) => ({
  authData: state.authUser.authData,
  isAuth: state.authUser.isAuth,
  isFetching: state.authUser.isFetching,
  profileData: state.authUser.profileData,
});

Login.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleGetAuthMe: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  handleGetAuthMe: getAuthMe,
})(Login);
