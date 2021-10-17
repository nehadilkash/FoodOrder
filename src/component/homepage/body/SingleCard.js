import { Col, Row } from "react-bootstrap";
import foodImage from "./card.png";
import styles from "./SingleCard.module.css";

const SingleCard = () => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv}>
        <img className={styles.img} src={foodImage} />
      </div>
      <div>
        <Row>
          <Col className={styles.colleft}>
            <p className={styles.p}>Chipotle Cheesy Chicken</p>
            <p className={styles.psub}>Chicken Burger</p>
          </Col>
          <Col className={styles.colright}>
            <p className={styles.p}>$20.95</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default SingleCard;
