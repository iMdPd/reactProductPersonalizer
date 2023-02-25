import styles from "../ProductForm.module.scss";
import PropTypes from "prop-types";
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

ProductSizeButton.propTypes = {
  children: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
