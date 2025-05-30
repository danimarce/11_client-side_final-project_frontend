import styles from "./HeadingTitle.module.css";

export const HeadingTitle = ({ title }) => {
  return <h1 className={styles["heading__title"]}>{title}</h1>;
};
