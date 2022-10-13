import React from "react";
import { Link } from "react-router-dom";

import s from "./Header.module.scss";

const Header = () => (
  <header className={s.root}>
    <Link to="/">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMSnkj-RZcyHanSi6kGpgq-igu6HChcNtPg&usqp=CAU"
        alt=""
      />
    </Link>
  </header>
);

export default Header;
