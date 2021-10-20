import styles from "./MenuBar.module.css";
const MenuBar = () => {
  return (
    <div className={styles.menuBar}>
      <p>HOME</p>
      <p>ABOUT US</p>
      <p>HOME</p>
      <p>EXIT</p>
    </div>
  );
};

export default MenuBar;
