// import { Card, CardGroup } from "react-bootstrap";
import pizza from "./pizza.jpg";
import burger from "./Burger.jpg";
import cakes from "./cakes.jpg";
import MyCard from "./MyCard";
import styles from "./ImageCard.module.css";
import { Container, Row, Col } from "react-bootstrap";
const ImageCard = () => {
  return (
    <Container>
      <Row>
        <Col className={styles.col}>
          <MyCard image={burger} name="Burger"></MyCard>
        </Col>
        <Col className={styles.col}>
          <MyCard image={pizza} name="Pizza"></MyCard>
        </Col>
        <Col className={styles.col}>
          <MyCard image={cakes} name="Cakes"></MyCard>
        </Col>
      </Row>
    </Container>
  );
};
export default ImageCard;
