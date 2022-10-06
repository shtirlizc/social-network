import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";

import {
  setUsersActionCreator,
  followActionCreator,
  unfollowActionCreator,
  setTotalUsersCount,
  setCurrentPage,
} from "../../redux/reducers/users";
import Button from "../../components/Button";
import Avatar from "./assets/avatar.jpeg";
import Pagination from "../../components/Pagination";

import s from "./Users.module.scss";

const PAGE_SIZE = 100;

class Users extends React.Component {
  componentDidMount() {
    const { currentPage, handleSetUsers, handleSetTotalCount } = this.props;
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${PAGE_SIZE}&page=${currentPage}`,
      )
      .then((response) => {
        if (response.status === 200) {
          handleSetUsers(response.data.items);
          handleSetTotalCount(response.data.totalCount);
        }
      });
  }

  onFollow = (userId) => {
    this.props.handleFollow(userId);
  };

  onUnfollow = (userId) => {
    this.props.handleUnfollow(userId);
  };

  onPageClick = (pageNumber) => {
    const { handleSetUsers, handleSetCurrentPage } = this.props;

    handleSetCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${PAGE_SIZE}&page=${pageNumber}`,
      )
      .then((response) => {
        if (response.status === 200) {
          handleSetUsers(response.data.items);
        }
      });
  };

  render() {
    const { users, isUsersLoaded, totalUsersCount, currentPage } = this.props;

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

        <div className={s.pagination}>
          <Pagination
            pageCount={Math.ceil(totalUsersCount / PAGE_SIZE)}
            currentPage={currentPage}
            onPageClick={this.onPageClick}
          />
        </div>

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
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
    handleSetTotalCount: (totalCount) => {
      dispatch(setTotalUsersCount(totalCount));
    },
    handleSetCurrentPage: (pageNumber) => {
      dispatch(setCurrentPage(pageNumber));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
