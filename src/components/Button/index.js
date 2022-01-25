import s from "./Button.module.scss";

const Button = ({ type = "button", onClick, children }) => {
  return (
    <button type={type} className={s.root} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
