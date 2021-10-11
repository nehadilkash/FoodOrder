import styles from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  return (
    <div className={styles.menu} />
    // <Menu className={styles.menu}>
    //   <a id="home" className="menu-item" href="/">
    //     Home
    //   </a>
    //   <a id="about" className="menu-item" href="/about">
    //     About
    //   </a>
    //   <a id="contact" className="menu-item" href="/contact">
    //     Contact
    //   </a>
    //   <a onClick={<p>clicked</p>} className="menu-item--small" href="">
    //     Settings
    //   </a>
    // </Menu>
  );
};
export default BurgerMenu;
