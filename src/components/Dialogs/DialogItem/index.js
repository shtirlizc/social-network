import React from "react";
import { NavLink } from "react-router-dom";

import s from "./DialogItem.module.scss";

const DialogItem = (props) => {
  const { id, name, avatar } = props;
  const path = `/dialogs/${id}`;

  return (
    <NavLink to={path} activeClassName={s.dialogsItemActive} className={s.dialogsItem}>
      <span className={s.dialogsAvatar}>
        <img src={avatar} alt="test" />
      </span>
      <span>{name}</span>
    </NavLink>
  );
};

export default DialogItem;
