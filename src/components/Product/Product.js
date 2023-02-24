import styles from "./Product.module.scss";

import Button from "../Button/Button";
import PropTypes from "prop-types";
import { ProductSizeButton } from "../ProductSizeButton/ProductSizeButton";
import { ProductColorButton } from "../ProductColorButton/ProductColorButton";
import { useState } from "react";

export const Product = ({ colors, sizes, name, title, basePrice }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(basePrice);

  const handleActiveClass = (param) => {
    colors.includes(param) ? setCurrentColor(param) : setCurrentSize(param);
  };

  const productValue = (param) => {
    setCurrentPrice(basePrice + param);
  };

  const productSummary = (e) => {
    e.preventDefault();
    console.log("        SUMMARY");
    console.log("_______________________");
    console.log("Name :", title);
    console.log("Price :", currentPrice);
    console.log("Size :", currentSize);
    console.log("Color :", currentColor);
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
              {sizes.map(({ name, additionalPrice }, index) => (
                <ProductSizeButton
                  key={index}
                  currentSize={currentSize}
                  onClick={() => {
                    handleActiveClass(name);
                    productValue(additionalPrice);
                  }}
                >
                  {name}
                </ProductSizeButton>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map((color, index) => (
                <ProductColorButton
                  key={index}
                  type={color}
                  currentColor={currentColor}
                  onClick={() => handleActiveClass(color)}
                />
              ))}
            </ul>
          </div>
          <Button onClick={productSummary} className={styles.button}>
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
