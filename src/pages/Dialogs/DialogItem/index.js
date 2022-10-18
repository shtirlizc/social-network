import React from "react";
import { NavLink } from "react-router-dom";

import { friendItem } from "../../../types";

import s from "./DialogItem.module.scss";

const DialogItem = ({ id, name, avatar }) => {
  const path = `/dialogs/${id}`;

  return (
    <NavLink to={path} activeClassName={s.dialogsItemActive} className={s.dialogsItem}>
      <span className={s.dialogsAvatar}>
        <img src={avatar} alt="" />
      </span>
      <span>{name}</span>
    </NavLink>
  );
};

DialogItem.propTypes = friendItem;

export default DialogItem;
