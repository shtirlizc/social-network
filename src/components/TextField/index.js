import s from "./TextField.module.scss";

const TextField = ({ id, name, placeholder, isTextArea = false, refValue, value, onChange }) => {
  const attributes = {
    id,
    name,
    placeholder,
    ref: refValue,
    className: s.root,
    value,
    onChange,
  };

  if (isTextArea) {
    return <textarea {...attributes} />;
  }
  return <input type="text" {...attributes} />;
};

export default TextField;
