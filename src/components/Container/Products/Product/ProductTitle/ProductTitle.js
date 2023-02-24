import styles from "./ProductTitle.module.scss";

export const ProductTitle = ({ title, currentPrice }) => {
  return (
    <header>
      <h2 className={styles.name}>{title}</h2>
      <span className={styles.price}>{currentPrice}</span>
    </header>
  );
};
