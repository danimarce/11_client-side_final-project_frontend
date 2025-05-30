import styles from "./FormButton.module.css"

export const FormButton = ({ textButton, handleClick }) => {
  return <button className={styles["form__button"]} onClick={handleClick}>{textButton}</button>;
};
