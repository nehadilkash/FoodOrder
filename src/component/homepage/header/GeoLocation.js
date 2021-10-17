import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import styles from "./GeoLocation.module.css";
const GeoLocation = () => {
  return (
    <>
      <Row>
        <Col xs={1} className={styles.col}>
          <FontAwesomeIcon
            className={styles.icon}
            icon="map-marker-alt"
            size="lg"
          ></FontAwesomeIcon>
        </Col>
        <Col>
          <p className={styles.p}>Hyderabad, India</p>
        </Col>
      </Row>
    </>
  );
};
export default GeoLocation;
