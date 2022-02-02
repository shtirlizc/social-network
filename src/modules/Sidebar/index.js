import React from "react";

import Friend from "./Friend";
import PageLink from "./PageLink";

import s from "./Sidebar.module.scss";

const Sidebar = (props) => {
  const { sidebar, friends } = props;

  const navigationElements = sidebar.map(({ id, link, text }) => (
    <PageLink key={id} id={id} link={link} text={text} />
  ));
  const friendsElements = friends.map(({ id, name, avatar }) => (
    <Friend key={id} name={name} avatar={avatar} />
  ));
  friendsElements.length = 3;

  return (
    <aside className={s.root}>
      <nav className={s.nav}>{navigationElements}</nav>
      <div className={s.friends}>{friendsElements}</div>
    </aside>
  );
};

export default Sidebar;
