import styles from "./Product.module.scss";

import Button from "../Button/Button";
import PropTypes from "prop-types";
import { useState } from "react";
import { TShirtSize } from "../TShirtSize/TShirtSize";
import { TShirtColor } from "../TShirtColor/TShirtColor";

export const Product = ({ colors, sizes, name, title, basePrice }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(basePrice);

  const handleActiveButton = (param) => {
    console.log(param);
    colors.includes(param) ? setCurrentColor(param) : setCurrentSize(param);
  };

  const sizeValue = (param) => {
    setCurrentPrice(basePrice + param);
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>{currentPrice}</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map(({ name, additionalPrice }, i) => (
                <TShirtSize
                  key={i}
                  currentSize={currentSize}
                  onClick={() => {
                    handleActiveButton(name);
                    sizeValue(additionalPrice);
                  }}
                >
                  {name}
                </TShirtSize>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map((color, i) => (
                <TShirtColor
                  key={i}
                  type={color}
                  currentColor={currentColor}
                  onClick={() => handleActiveButton(color)}
                />
              ))}
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
