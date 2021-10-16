import styles from "./Header.module.css";
import SideBar from "./SideBar";
import GeoLocation from "./GeoLocation";
import Profile from "./Profile";
import profileImage from "./logo.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";

function Header() {
  const data = {
    name: {
      firstName: "Neha",
      lastName: "Dilkash",
    },
    icon: profileImage,
  };
  return (
    <Container>
      <Row>
        <Col xs="6" sm="2">
          <Button />
        </Col>
        <Col xs="6" sm="7">
          <GeoLocation />
        </Col>
        <Col sm="3">
          <Profile profile={data}></Profile>
        </Col>
      </Row>
    </Container>
  );
}
export default Header;
