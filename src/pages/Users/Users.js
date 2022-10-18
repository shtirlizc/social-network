import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import Avatar from "./assets/avatar.jpeg";
import Pagination from "../../components/Pagination";
import { usersItem } from "../../types";
import API from "../../api";

import s from "./Users.module.scss";

const Users = ({ users, currentPage, pageCount, onPageClick, onFollow, onUnfollow }) => {
  const handleFollow = (userId) => {
    API.follow.follow(userId).then((data) => {
      if (data.resultCode === 0) {
        onFollow(userId);
      }
    });
  };

  const handleUnFollow = (userId) => {
    API.follow.unFollow(userId).then((data) => {
      if (data.resultCode === 0) {
        onUnfollow(userId);
      }
    });
  };

  const userView = users.map(({ id, photos, name, status, followed }) => (
    <Link to={`/profile/${id}`} key={id} className={s.user}>
      <div className={s.userLeftBlock}>
        <div className={s.userPhoto}>
          <img src={photos.small || Avatar} alt={name} />
        </div>
        <div className={s.userSubscribe}>
          {followed ? (
            <Button
              onClick={(event) => {
                event.preventDefault();
                handleUnFollow(id);
              }}>
              Unfollow
            </Button>
          ) : (
            <Button
              onClick={(event) => {
                event.preventDefault();
                handleFollow(id);
              }}>
              Follow
            </Button>
          )}
        </div>
      </div>
      <div className={s.userRightBlock}>
        <h3 className={s.userName}>{name}</h3>
        {status && <p className={s.userSlogan}>{status}</p>}
      </div>
    </Link>
  ));

  return (
    <div className={s.root}>
      <h1>Users</h1>

      <div className={s.pagination}>
        <Pagination pageCount={pageCount} currentPage={currentPage} onPageClick={onPageClick} />
      </div>

      {!userView.length && <p>Users were not loaded</p>}
      {Boolean(userView.length) && userView}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.exact(usersItem)).isRequired,
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
  onFollow: PropTypes.func.isRequired,
  onUnfollow: PropTypes.func.isRequired,
};

export default Users;
