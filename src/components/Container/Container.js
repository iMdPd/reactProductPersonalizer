import styles from "./Container.module.scss";
import PropTypes from "prop-types";

export const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
};
