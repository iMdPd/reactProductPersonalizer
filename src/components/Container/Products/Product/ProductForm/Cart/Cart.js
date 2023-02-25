import styles from "./Cart.module.scss";
import clsx from "clsx";
import PropTypes from "prop-types";

export const Cart = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={clsx(styles.button, className)}>
      {children}
    </button>
  );
};

Cart.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
