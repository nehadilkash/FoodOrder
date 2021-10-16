import SearchBar from "./body/SearchBar";
import ImageCard from "./body/ImageCard";
import Footer from "./Footer";
import Header from "./header/Header";
import styles from "./Home-module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import SingleCard from "./body/SingleCard";
import SideBar from "./header/SideBar";

const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <Container>
          {/* <SideBar /> */}
          <Row>
            <Col>
              <p>Hey!</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Lets get your order</p>
            </Col>
          </Row>
          <SearchBar />
          <ImageCard />
          <Row>
            <Col>
              <p>Popular</p>
            </Col>
            <Col>
              <Button>view all</Button>
            </Col>
          </Row>
          <SingleCard />
        </Container>
        <Footer />
      </Container>
    </>
  );
};
export default Home;
