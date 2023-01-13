import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import s from "./TextField.module.scss";

const TextField = ({
  id,
  name,
  placeholder,
  autofocus,
  refValue,
  value,
  onChange,
  onBlur,
  isTextArea = false,
}) => {
  if (isTextArea) {
    return (
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        autoFocus={autofocus}
        ref={refValue}
        className={classNames(s.root, s.textarea)}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    );
  }
  return (
    <input
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      autoFocus={autofocus}
      ref={refValue}
      className={s.root}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

TextField.defaultProps = {
  id: undefined,
  name: undefined,
  placeholder: undefined,
  autofocus: false,
  value: undefined,
  onChange: undefined,
  onBlur: undefined,
  isTextArea: false,
  refValue: null,
};

TextField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  autofocus: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  refValue: PropTypes.string,
  isTextArea: PropTypes.bool,
};

export default TextField;
