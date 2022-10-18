import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  setUsers,
  follow,
  unfollow,
  setTotalUsersCount,
  setCurrentPage,
  setIsFetching,
  toggleFollowingInProgress,
} from "../../redux/reducers/users";
import Users from "./Users";
import Preloader from "../../components/Preloader";
import { usersItem } from "../../types";
import API from "../../api";

const PAGE_SIZE = 100;

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, handleSetUsers, handleSetTotalCount, handleSetISFetching } = this.props;

    handleSetISFetching(true);

    API.users.getUsers(PAGE_SIZE, currentPage).then((data) => {
      handleSetUsers(data.items);
      handleSetTotalCount(data.totalCount);
      handleSetISFetching(false);
    });
  }

  onFollow = (userId) => {
    const { handleFollow } = this.props;

    handleFollow(userId);
  };

  onUnfollow = (userId) => {
    const { handleUnfollow } = this.props;

    handleUnfollow(userId);
  };

  onPageClick = (pageNumber) => {
    const { handleSetUsers, handleSetCurrentPage, handleSetISFetching } = this.props;

    handleSetISFetching(true);
    handleSetCurrentPage(pageNumber);

    API.users.getUsers(PAGE_SIZE, pageNumber).then((data) => {
      handleSetUsers(data.items);
      handleSetISFetching(false);
    });
  };

  render() {
    const {
      users,
      isFetching,
      totalUsersCount,
      currentPage,
      followingInProgress,
      handleToggleFollowingInProgress,
    } = this.props;

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
        followingInProgress={followingInProgress}
        handleToggleFollowingInProgress={handleToggleFollowingInProgress}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  isFetching: state.usersPage.isFetching,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  followingInProgress: state.usersPage.followingInProgress,
});

UsersContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.exact(usersItem)).isRequired,
  isFetching: PropTypes.bool.isRequired,
  totalUsersCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  followingInProgress: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleSetUsers: PropTypes.func.isRequired,
  handleFollow: PropTypes.func.isRequired,
  handleUnfollow: PropTypes.func.isRequired,
  handleSetTotalCount: PropTypes.func.isRequired,
  handleSetCurrentPage: PropTypes.func.isRequired,
  handleSetISFetching: PropTypes.func.isRequired,
  handleToggleFollowingInProgress: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  handleSetUsers: setUsers,
  handleFollow: follow,
  handleUnfollow: unfollow,
  handleSetTotalCount: setTotalUsersCount,
  handleSetCurrentPage: setCurrentPage,
  handleSetISFetching: setIsFetching,
  handleToggleFollowingInProgress: toggleFollowingInProgress,
})(UsersContainer);
