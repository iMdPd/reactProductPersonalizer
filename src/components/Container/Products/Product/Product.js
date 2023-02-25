import styles from "./Product.module.scss";

import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import { ProductImage } from "./ProductImage/ProductImage";
import { ProductTitle } from "./ProductTitle/ProductTitle";
import { ProductForm } from "./ProductForm/ProductForm";

export const Product = ({ colors, sizes, name, title, basePrice }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(sizes[0].additionalPrice);

  const handleActiveClass = (value) => {
    colors.includes(value) ? setCurrentColor(value) : setCurrentSize(value);
  };

  const getPrice = useMemo(
    () => currentPrice + basePrice,
    [currentPrice, basePrice]
  );

  const productSummary = (e) => {
    e.preventDefault();

    const summary = {
      Name: title,
      Price: getPrice,
      Size: currentSize,
      Color: currentColor,
    };

    console.table(summary);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <ProductTitle title={title} getPrice={getPrice} />
        <ProductForm
          sizes={sizes}
          colors={colors}
          currentSize={currentSize}
          currentColor={currentColor}
          handleActiveClass={handleActiveClass}
          setCurrentPrice={setCurrentPrice}
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
