import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";

import {
  setUsersActionCreator,
  followActionCreator,
  unfollowActionCreator,
  setTotalUsersCount,
  setCurrentPage,
  setIsFetching,
} from "../../redux/reducers/users";
import Users from "./Users";
import Preloader from "../../components/Preloader";

const PAGE_SIZE = 100;

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, handleSetUsers, handleSetTotalCount, handleSetISFetching } = this.props;

    handleSetISFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${PAGE_SIZE}&page=${currentPage}`,
      )
      .then((response) => {
        if (response.status === 200) {
          handleSetUsers(response.data.items);
          handleSetTotalCount(response.data.totalCount);
          handleSetISFetching(false);
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
    const { handleSetUsers, handleSetCurrentPage, handleSetISFetching } = this.props;

    handleSetISFetching(true);
    handleSetCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${PAGE_SIZE}&page=${pageNumber}`,
      )
      .then((response) => {
        if (response.status === 200) {
          handleSetUsers(response.data.items);
          handleSetISFetching(false);
        }
      });
  };

  render() {
    const { users, isFetching, totalUsersCount, currentPage } = this.props;

    return isFetching ? (
      <Preloader />
    ) : (
      <Users
        users={users}
        currentPage={currentPage}
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
    isFetching: state.usersPage.isFetching,
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
    handleSetISFetching: (isFetching) => {
      dispatch(setIsFetching(isFetching));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
