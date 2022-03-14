import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  setUsersActionCreator,
  followActionCreator,
  unfollowActionCreator,
} from "../../redux/reducers/users";
import Button from "../../components/Button";

import s from "./Users.module.scss";

const Users = (props) => {
  const { users, handleSetUsers, handleFollow, handleUnfollow } = props;

  useEffect(() => {
    handleSetUsers([
      {
        id: 1,
        photoImg: "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png",
        fullName: "Superman",
        slogan: "I am a Superman",
        location: { country: "USA", city: "Metro city" },
        followed: true,
      },
      {
        id: 2,
        photoImg: "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png",
        fullName: "Batman",
        slogan: "I am a Batman",
        location: { country: "USA", city: "Gotham" },
        followed: false,
      },
      {
        id: 3,
        photoImg: "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png",
        fullName: "Spider-man",
        slogan: "I am a Spider-man",
        location: { country: "USA", city: "New York" },
        followed: true,
      },
    ]);
  }, []);

  const onFollow = (userId) => {
    handleFollow(userId);
  };

  const onUnfollow = (userId) => {
    handleUnfollow(userId);
  };

  const userView = users.map(({ id, photoImg, fullName, slogan, location, followed }) => (
    <div key={id} className={s.user}>
      <div className={s.userLeftBlock}>
        <div className={s.userPhoto}>
          <img src={photoImg} alt={fullName} />
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
        <div className={s.userData}>
          <h3 className={s.userName}>{fullName}</h3>
          <p className={s.userSlogan}>{slogan}</p>
        </div>
        <div className={s.userLocation}>
          <p className={s.userCountry}>{location.country}</p>
          <p className={s.userCity}>{location.city}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className={s.root}>
      <h1>Users</h1>

      <div className={s.list}>{userView}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
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
