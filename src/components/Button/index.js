import s from "./Button.module.scss";

const Button = ({ type = "button", disabled = false, onClick, children }) => {
  return (
    <button type={type} className={s.root} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
