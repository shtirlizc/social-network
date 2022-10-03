import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";

import {
  setUsersActionCreator,
  followActionCreator,
  unfollowActionCreator,
} from "../../redux/reducers/users";
import Button from "../../components/Button";
import Avatar from "./assets/avatar.jpeg";

import s from "./Users.module.scss";

class Users extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
      response.status === 200
        ? this.props.handleSetUsers(response.data.items)
        : this.props.handleSetUsers([]);
    });
  }

  onFollow = (userId) => {
    this.props.handleFollow(userId);
  };

  onUnfollow = (userId) => {
    this.props.handleUnfollow(userId);
  };

  render() {
    const { users, isUsersLoaded } = this.props;

    const userView = users.map(({ id, photos, name, status, followed }) => (
      <div key={id} className={s.user}>
        <div className={s.userLeftBlock}>
          <div className={s.userPhoto}>
            <img src={photos.small || Avatar} alt={name} />
          </div>
          <div className={s.userSubscribe}>
            {followed ? (
              <Button onClick={() => this.onUnfollow(id)}>Unfollow</Button>
            ) : (
              <Button onClick={() => this.onFollow(id)}>Follow</Button>
            )}
          </div>
        </div>
        <div className={s.userRightBlock}>
          <h3 className={s.userName}>{name}</h3>
          {status && <p className={s.userSlogan}>{status}</p>}
        </div>
      </div>
    ));

    return (
      <div className={s.root}>
        <h1>Users</h1>

        {isUsersLoaded && userView.length ? (
          <div className={s.list}>{userView}</div>
        ) : (
          <p>Users were not loaded</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    isUsersLoaded: state.usersPage.loaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSetUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    handleFollow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    handleUnfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
