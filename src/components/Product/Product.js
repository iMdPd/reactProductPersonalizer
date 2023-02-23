import styles from "./Product.module.scss";
import clsx from "clsx";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { useState } from "react";
import { TShirtSize } from "../T-ShirtSize/TShirtSize";

export const Product = ({ colors, sizes, name, title, basePrice }) => {
  const [setCurrentColor] = useState(colors[0]);
  const [setCurrentSize] = useState(sizes[0]);

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${setCurrentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>{basePrice}</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map(({ name }) => (
                <TShirtSize>{name}</TShirtSize>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              <li>
                <button
                  type="button"
                  className={clsx(styles.colorBlack, styles.active)}
                />
              </li>
              <li>
                <button type="button" className={clsx(styles.colorRed)} />
              </li>
              <li>
                <button type="button" className={clsx(styles.colorWhite)} />
              </li>
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string),
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      additionalPrice: PropTypes.number,
    })
  ),
};
