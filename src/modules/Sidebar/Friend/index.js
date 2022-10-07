import React from "react";
import PropTypes from "prop-types";

import s from "./Friend.module.scss";

const Friend = ({ name, avatar }) => (
  <div className={s.friend}>
    <img src={avatar} alt={name} />
  </div>
);

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Friend;
