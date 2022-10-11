import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import PropTypes from "prop-types";

import {
  setUsers,
  follow,
  unfollow,
  setTotalUsersCount,
  setCurrentPage,
  setIsFetching,
} from "../../redux/reducers/users";
import Users from "./Users";
import Preloader from "../../components/Preloader";
import { usersItem } from "../../types";

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

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  isFetching: state.usersPage.isFetching,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
});

UsersContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(usersItem)).isRequired,
  isFetching: PropTypes.bool.isRequired,
  totalUsersCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handleSetUsers: PropTypes.func.isRequired,
  handleFollow: PropTypes.func.isRequired,
  handleUnfollow: PropTypes.func.isRequired,
  handleSetTotalCount: PropTypes.func.isRequired,
  handleSetCurrentPage: PropTypes.func.isRequired,
  handleSetISFetching: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  handleSetUsers: setUsers,
  handleFollow: follow,
  handleUnfollow: unfollow,
  handleSetTotalCount: setTotalUsersCount,
  handleSetCurrentPage: setCurrentPage,
  handleSetISFetching: setIsFetching,
})(UsersContainer);
