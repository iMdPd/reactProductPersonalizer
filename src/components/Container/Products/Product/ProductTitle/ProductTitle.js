import styles from "./ProductTitle.module.scss";
import PropTypes from "prop-types";

export const ProductTitle = ({ title, currentPrice }) => {
  console.log(currentPrice);
  return (
    <header>
      <h2 className={styles.name}>{title}</h2>
      <span className={styles.price}>Price: {currentPrice}$</span>
    </header>
  );
};

ProductTitle.propTypes = {
  title: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
};
