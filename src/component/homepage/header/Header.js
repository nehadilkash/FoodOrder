import styles from "./Header.module.css";
import SideBar from "./SideBar";
import GeoLocation from "./GeoLocation";
import Profile from "./Profile";
import profileImage from "./logo.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = (props) => {
  const data = {
    name: {
      firstName: "Neha",
      lastName: "Dilkash",
    },
    icon: profileImage,
  };
  return (
    <Row>
      <Col xs={3}>
        <FontAwesomeIcon icon="bars" onClick={props.showSideBar} />
      </Col>
      <Col>
        <GeoLocation />
      </Col>
      <Col className={styles.profile}>
        <Profile profile={data}></Profile>
      </Col>
    </Row>
  );
};
export default Header;
