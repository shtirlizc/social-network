import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import s from "./PageLink.module.scss";

const PageLink = ({ link, text }) => {
  const href = `/${link}`;

  return (
    <NavLink className={s.item} activeClassName={s.active} to={href}>
      {text}
    </NavLink>
  );
};

PageLink.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PageLink;
