import styles from "../Product/Product.module.scss";
import clsx from "clsx";

export const TShirtSize = ({ children, currentSize }) => {
  return (
    <li>
      <button
        type="button"
        className={clsx(currentSize === children && styles.active)}
      >
        {children}
      </button>
    </li>
  );
};
