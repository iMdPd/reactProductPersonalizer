import styles from "./ProductForm.module.scss";

import { Cart } from "./Cart/Cart";
import { ProductSizeButton } from "./ProductSizeButton/ProductSizeButton";
import { ProductColorButton } from "./ProductColorButton/ProductColorButton";

export const ProductForm = ({
  sizes,
  currentSize,
  colors,
  currentColor,
  handleActiveClass,
  productValue,
  productSummary,
}) => {
  return (
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
      <Cart onClick={productSummary} className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Cart>
    </form>
  );
};
