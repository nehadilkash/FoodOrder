import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import styles from "./GeoLocation.module.css";
const GeoLocation = () => {
  return (
    <>
      <div className={styles.row}>
        <div className={(styles.col, styles.firstCol)}>
          <FontAwesomeIcon
            className={styles.icon}
            icon="map-marker-alt"
            size="lg"
          ></FontAwesomeIcon>
        </div>
        <div className={styles.col}>
          <p className={styles.p}>Hyderabad, India</p>
        </div>
      </div>
      {/* </Col>
      </Row> */}
    </>
  );
};
export default GeoLocation;
