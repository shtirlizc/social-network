import React from "react";

import { ReactComponent as SvgPreloader } from "./assets/preloader.svg";

import s from "./style.module.scss";

const Preloader = () => {
  return (
    <div className={s.root}>
      <SvgPreloader />
    </div>
  );
};

export default Preloader;
