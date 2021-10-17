import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Container } from "react-bootstrap";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div>
      <div className={styles.row}>
        <div className={styles.col}>
          <FontAwesomeIcon icon="th-large" />
          <p>Home</p>
        </div>
        <div className={styles.col}>
          <FontAwesomeIcon icon="heart" />
          <p>Favorites</p>
        </div>
        <div className={styles.col}>
          <FontAwesomeIcon icon="user" />
          <p>Acoounts</p>
        </div>
        <div className={styles.col}>
          <FontAwesomeIcon icon="ellipsis-h" />
          <p>more</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
