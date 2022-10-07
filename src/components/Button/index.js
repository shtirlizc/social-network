import React from "react";
import PropTypes from "prop-types";

import s from "./Button.module.scss";

const Button = ({ onClick, htmlType = "button", disabled = false, children }) => (
  <button type={htmlType} className={s.root} disabled={disabled} onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  htmlType: "button",
  disabled: false,
  onClick: null,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  htmlType: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
};

export default Button;
