import React from "react";

import Button from "../../components/Button";
import Avatar from "./assets/avatar.jpeg";
import Pagination from "../../components/Pagination";

import s from "./Users.module.scss";

const Users = ({ users, currentPage, pageCount, onPageClick, onFollow, onUnfollow }) => {
  const userView = users.map(({ id, photos, name, status, followed }) => (
    <div key={id} className={s.user}>
      <div className={s.userLeftBlock}>
        <div className={s.userPhoto}>
          <img src={photos.small || Avatar} alt={name} />
        </div>
        <div className={s.userSubscribe}>
          {followed ? (
            <Button onClick={() => onUnfollow(id)}>Unfollow</Button>
          ) : (
            <Button onClick={() => onFollow(id)}>Follow</Button>
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
        <Pagination pageCount={pageCount} currentPage={currentPage} onPageClick={onPageClick} />
      </div>

      {!userView.length && <p>Users were not loaded</p>}
    </div>
  );
};

export default Users;