import React from "react";
import { connect } from "react-redux";

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

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
    friends: state.friends,
  };
};

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;
