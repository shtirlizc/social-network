import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Friend from "./Friend";
import PageLink from "./PageLink";

import s from "./Sidebar.module.scss";

const Sidebar = ({ sidebar, friends }) => {
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

const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
  friends: state.friends,
});

Sidebar.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      avatar: PropTypes.string,
    }),
  ).isRequired,
  sidebar: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      link: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;
