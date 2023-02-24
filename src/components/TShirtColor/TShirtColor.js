import styles from "../Product/Product.module.scss";
import clsx from "clsx";

export const TShirtColor = ({ type, currentColor }) => {
  const prepareClassColorName = (colorName) => {
    return (
      `color` +
      [colorName.toUpperCase().charAt(0) + colorName.substr(1).toLowerCase()]
    );
  };

  return (
    <li>
      <button
        type="button"
        className={clsx(
          styles[prepareClassColorName(type)],
          currentColor === type && styles.active
        )}
      />
    </li>
  );
};
