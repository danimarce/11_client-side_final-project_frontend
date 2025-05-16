import styles from "./PageHeader.module.css"

export const PageHeader = ({ children }) => {
  return <header className={styles["page__header"]}>{children}</header>;
};
