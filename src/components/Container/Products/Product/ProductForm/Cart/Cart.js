import styles from "./Cart.module.scss";
import clsx from "clsx";

export const Cart = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={clsx(styles.button, className)}>
      {children}
    </button>
  );
};
