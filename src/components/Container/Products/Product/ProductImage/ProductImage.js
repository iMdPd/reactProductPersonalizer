import styles from "./ProductImage.module.scss";

export const ProductImage = ({ name, title, currentColor }) => {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt={title}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}
      />
    </div>
  );
};
