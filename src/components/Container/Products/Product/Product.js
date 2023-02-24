import styles from "./Product.module.scss";

import PropTypes from "prop-types";
import { useState } from "react";
import { ProductImage } from "./ProductImage/ProductImage";
import { ProductTitle } from "./ProductTitle/ProductTitle";
import { ProductForm } from "./ProductForm/ProductForm";

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
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <ProductTitle title={title} currentPrice={currentPrice} />
        <ProductForm
          sizes={sizes}
          currentSize={currentSize}
          colors={colors}
          currentColor={currentColor}
          handleActiveClass={handleActiveClass}
          productValue={productValue}
          productSummary={productSummary}
        />
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
