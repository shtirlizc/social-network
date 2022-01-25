import s from "./TextField.module.scss";

const TextField = ({ id, name, placeholder, isTextArea = false, refValue }) => {
  const attributes = {
    id,
    name,
    placeholder,
    ref: refValue,
    className: s.root,
  };

  if (isTextArea) {
    return <textarea {...attributes} />;
  }
  return <input type="text" {...attributes} />;
};

export default TextField;
