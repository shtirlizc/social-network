import React from "react";
import PropTypes from "prop-types";

import s from "./TextField.module.scss";

const TextField = ({ id, name, placeholder, refValue, value, onChange, isTextArea = false }) => {
  if (isTextArea) {
    return (
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        ref={refValue}
        className={s.root}
        value={value}
        onChange={onChange}
      />
    );
  }
  return (
    <input
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      ref={refValue}
      className={s.root}
      value={value}
      onChange={onChange}
    />
  );
};

TextField.defaultProps = {
  isTextArea: false,
  refValue: null,
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  refValue: PropTypes.string,
  isTextArea: PropTypes.bool,
};

export default TextField;
