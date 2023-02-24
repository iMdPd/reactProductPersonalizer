import styles from "../Product/Product.module.scss";
import clsx from "clsx";

export const ProductSizeButton = ({ children, currentSize, onClick }) => {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className={clsx(currentSize === children && styles.active)}
      >
        {children}
      </button>
    </li>
  );
};
