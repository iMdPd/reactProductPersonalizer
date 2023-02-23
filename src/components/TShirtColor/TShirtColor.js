import styles from "./TShirtColor.module.scss";
import clsx from "clsx";

export const TShirtColor = ({ type }) => {
  const prepareClassColorName = (colorName) => {
    return styles[
      colorName.toUpperCase().charAt(0) + colorName.substr(1).toLowerCase()
    ];
  };

  return (
    <li>
      <button type="button" className={clsx(prepareClassColorName(type))} />
    </li>
  );
};
