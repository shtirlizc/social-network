import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { compose } from "redux";

import { follow, unFollow, getUsers } from "../../redux/reducers/users";
import Users from "./Users";
import Preloader from "../../components/Preloader";
import { usersItem } from "../../types";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { pageSize, currentPage, handleGetUsers } = this.props;

    handleGetUsers(pageSize, currentPage);
  }

  onPageClick = (pageNumber) => {
    const { pageSize, handleGetUsers } = this.props;

    handleGetUsers(pageSize, pageNumber);
  };

  render() {
    const {
      users,
      isFetching,
      totalUsersCount,
      currentPage,
      pageSize,
      followingInProgress,
      handleFollow,
      handleUnFollow,
    } = this.props;

    return isFetching ? (
      <Preloader />
    ) : (
      <Users
        users={users}
        currentPage={currentPage}
        pageCount={Math.ceil(totalUsersCount / pageSize)}
        onPageClick={this.onPageClick}
        onFollow={handleFollow}
        onUnFollow={handleUnFollow}
        followingInProgress={followingInProgress}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  isFetching: state.usersPage.isFetching,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  pageSize: state.usersPage.pageSize,
  followingInProgress: state.usersPage.followingInProgress,
});

UsersContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.exact(usersItem)).isRequired,
  isFetching: PropTypes.bool.isRequired,
  totalUsersCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  followingInProgress: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleFollow: PropTypes.func.isRequired,
  handleUnFollow: PropTypes.func.isRequired,
  handleGetUsers: PropTypes.func.isRequired,
};

export default compose(
  connect(mapStateToProps, {
    handleFollow: follow,
    handleUnFollow: unFollow,
    handleGetUsers: getUsers,
  }),
  withAuthRedirect,
)(UsersContainer);
