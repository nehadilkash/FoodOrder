import { Row, Col, Container } from "react-bootstrap";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div>
      <div className={styles.row}>
        <div className={styles.col}>
          <p>Home</p>
        </div>
        <div className={styles.col}>
          <p>Favorites</p>
        </div>
        <div className={styles.col}>
          <p>Acoounts</p>
        </div>
        <div className={styles.col}>
          <p>more</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
