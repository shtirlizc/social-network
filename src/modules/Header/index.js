import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { authData as authDataType } from "../../types";

import s from "./Header.module.scss";

const Header = ({ isAuth, authData }) => (
  <header className={s.root}>
    <Link to="/">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMSnkj-RZcyHanSi6kGpgq-igu6HChcNtPg&usqp=CAU"
        alt=""
      />
    </Link>

    {isAuth ? <span>{authData?.login}</span> : <Link to="/login">Login</Link>}
  </header>
);

const mapStateToProps = (state) => ({
  authData: state.authUser.authData,
  isAuth: state.authUser.isAuth,
});

Header.defaultProps = {
  authData: null,
};

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  authData: PropTypes.exact(authDataType),
};

export default connect(mapStateToProps)(Header);
