import styles from "./Header.module.css";
import SideBar from "./SideBar";
import GeoLocation from "./GeoLocation";
import Profile from "./Profile";
import profileImage from "./logo.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";

const Header = (props) => {
  const data = {
    name: {
      firstName: "Neha",
      lastName: "Dilkash",
    },
    icon: profileImage,
  };
  return (
    // <Container>
    <Row>
      <Col xs={3}>
        <button onClick={props.showSideBar} />
      </Col>
      <Col>
        <GeoLocation />
      </Col>
      <Col className={styles.profile}>
        <Profile profile={data}></Profile>
      </Col>
    </Row>
    // </Container>
  );
};
export default Header;
