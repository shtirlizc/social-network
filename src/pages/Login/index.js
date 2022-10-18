import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import PropTypes from "prop-types";

import { setAuthUser, setIsFetching, setProfile } from "../../redux/reducers/auth";
import Preloader from "../../components/Preloader";
import { profileType } from "../../types";

import s from "./Login.module.scss";

class Login extends React.Component {
  componentDidMount() {
    const { handleAuthUser, handleFetching } = this.props;

    handleFetching(true);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          if (response.data.resultCode === 0) {
            const { id, email, login } = response.data.data;
            handleAuthUser({ id, email, login });
          }
          handleFetching(false);
        }
      });
  }

  componentDidUpdate() {
    const { profileData, authData, handleProfile, handleFetching } = this.props;

    if (authData && !profileData) {
      const { id } = authData;

      handleFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then((response) => {
        if (response.status === 200) {
          handleProfile(response.data);
          handleFetching(false);
        }
      });
    }
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

Login.defaultProps = {
  authData: null,
  profileData: null,
};

Login.propTypes = {
  authData: PropTypes.exact({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
  }),
  isAuth: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  profileData: PropTypes.exact(profileType),
  handleAuthUser: PropTypes.func.isRequired,
  handleFetching: PropTypes.func.isRequired,
  handleProfile: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  handleAuthUser: setAuthUser,
  handleFetching: setIsFetching,
  handleProfile: setProfile,
})(Login);
