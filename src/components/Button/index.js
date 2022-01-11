import s from "./Button.module.scss";

const Button = ({ type = "button", children }) => {
  return (
    <button type={type} className={s.root}>
      {children}
    </button>
  );
};

export default Button;
