import styles from "./ProductTitle.module.scss";
import PropTypes from "prop-types";

export const ProductTitle = ({ title, getPrice }) => {
  return (
    <header>
      <h2 className={styles.name}>{title}</h2>
      <span className={styles.price}>Price: {getPrice}$</span>
    </header>
  );
};

ProductTitle.propTypes = {
  title: PropTypes.string.isRequired,
  getPrice: PropTypes.number.isRequired,
};
