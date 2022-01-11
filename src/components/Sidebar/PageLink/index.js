import React from "react";
import { NavLink } from "react-router-dom";

import s from "./PageLink.module.css";

const PageLink = (props) => {
  const { link, text } = props;
  const href = `/${link}`;

  return (
    <NavLink className={s.item} activeClassName={s.active} to={href}>
      {text}
    </NavLink>
  );
};

export default PageLink;
