import styles from "./Button.module.scss";
import clsx from "clsx";

const Button = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={clsx(styles.button, className)}>
      {children}
    </button>
  );
};

export default Button;
