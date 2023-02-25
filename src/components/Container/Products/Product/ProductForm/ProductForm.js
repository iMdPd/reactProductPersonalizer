import styles from "./ProductForm.module.scss";
import PropTypes from "prop-types";

import { Cart } from "./Cart/Cart";
import { OptionSize } from "./OptionSize/OptionSize";
import { OptionColor } from "./OptionColor/OptionColor";

export const ProductForm = ({
  sizes,
  colors,
  currentSize,
  currentColor,
  handleActiveClass,
  setCurrentPrice,
  productSummary,
}) => {
  return (
    <form>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {sizes.map(({ name, additionalPrice }, index) => (
            <OptionSize
              key={index}
              currentSize={currentSize}
              onClick={() => {
                handleActiveClass(name);
                setCurrentPrice(additionalPrice);
              }}
            >
              {name}
            </OptionSize>
          ))}
        </ul>
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {colors.map((color, index) => (
            <OptionColor
              key={index}
              type={color}
              currentColor={currentColor}
              onClick={() => handleActiveClass(color)}
            />
          ))}
        </ul>
      </div>
      <Cart onClick={productSummary} className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Cart>
    </form>
  );
};

ProductForm.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      additionalPrice: PropTypes.number,
    })
  ),
  colors: PropTypes.arrayOf(PropTypes.string),
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  handleActiveClass: PropTypes.func.isRequired,
  setCurrentPrice: PropTypes.func.isRequired,
  productSummary: PropTypes.func.isRequired,
};
