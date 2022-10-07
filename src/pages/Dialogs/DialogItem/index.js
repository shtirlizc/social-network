import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import s from "./DialogItem.module.scss";

const DialogItem = ({ id, name, avatar }) => {
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

DialogItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default DialogItem;
