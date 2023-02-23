import styles from "./TShirtSize.module.scss";

export const TShirtSize = ({ children }) => {
  return (
    <li>
      <button type="button">{children}</button>
    </li>
  );
};
