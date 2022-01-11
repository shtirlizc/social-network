import React from "react";
import s from "./Friend.module.css";

const Friend = (props) => {
  const { name, avatar } = props;

  return (
    <div className={s.friend}>
      <img src={avatar} alt={name} />
    </div>
  );
};

export default Friend;
