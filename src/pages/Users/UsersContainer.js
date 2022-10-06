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
import Users from "./Users";

const PAGE_SIZE = 100;

class UsersContainer extends React.Component {
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

    return (
      <Users
        users={users}
        currentPage={currentPage}
        isUsersLoaded={isUsersLoaded}
        pageCount={Math.ceil(totalUsersCount / PAGE_SIZE)}
        onPageClick={this.onPageClick}
        onFollow={this.onFollow}
        onUnfollow={this.onUnfollow}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
