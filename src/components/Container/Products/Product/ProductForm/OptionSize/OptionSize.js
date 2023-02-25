import styles from "../ProductForm.module.scss";
import PropTypes from "prop-types";
import clsx from "clsx";

export const OptionSize = ({ children, currentSize, onClick }) => {
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

OptionSize.propTypes = {
  children: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
