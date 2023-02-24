import styles from "../ProductForm.module.scss";
import clsx from "clsx";

export const ProductColorButton = ({ type, currentColor, onClick }) => {
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
        onClick={onClick}
        className={clsx(
          styles[prepareClassColorName(type)],
          currentColor === type && styles.active
        )}
      />
    </li>
  );
};
