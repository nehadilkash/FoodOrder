import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SearchBar.module.css";
import { Container, Row, Col } from "react-bootstrap";
const SearchBar = () => {
  return (
    <>
      <Row className={styles.row}>
        <Col xs={1}>
          <FontAwesomeIcon className={styles.icon} icon="search" size="lg" />
        </Col>
        <Col>
          <input
            className={styles.text}
            type="text"
            placeholder="search our delecious burger"
          />
        </Col>
      </Row>
    </>
  );
};
export default SearchBar;
