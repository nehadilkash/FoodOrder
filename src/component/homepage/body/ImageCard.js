// import { Card, CardGroup } from "react-bootstrap";
import pizza from "./pizza.jpg";
import burger from "./Burger.jpg";
import cakes from "./cakes.jpg";
import MyCard from "./MyCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./ImageCard.module.css";
const ImageCard = () => {
  return (
    // <CardGroup>
    //   <Card>
    //     <Card.Img variant="top" src={foodImage1} />
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This is a wider card with supporting text below as a natural lead-in
    //         to additional content. This content is a little bit longer.
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    //   <Card>
    //     <Card.Img variant="top" src={foodImage2} />
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This card has supporting text below as a natural lead-in to
    //         additional content.{" "}
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    //   <Card>
    //     <Card.Img variant="top" src={foodImage3} />
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This is a wider card with supporting text below as a natural lead-in
    //         to additional content. This card has even longer content than the
    //         first to show that equal height action.
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    // </CardGroup>
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
