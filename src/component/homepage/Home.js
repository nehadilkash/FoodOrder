import SearchBar from "./body/SearchBar";
import ImageCard from "./body/ImageCard";
import Footer from "./Footer";
import Header from "./header/Header";
import styles from "./Home.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import SingleCard from "./body/SingleCard";
import SideBar from "./header/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuBar from "./MenuBar/MenuBar";
import React, { useState } from "react";

const Home = () => {
  const [showMenuBar, setShowMenuBar] = useState(false);

  const onClick = () => {
    console.log("clicked");
    if (showMenuBar == true) {
      setShowMenuBar(false);
    } else {
      setShowMenuBar(true);
    }
  };

  return (
    <>
      <Row>
        <Col className={`${!showMenuBar && styles.topCol}`} xs={2}>
          {showMenuBar ? <MenuBar /> : null}
        </Col>
        <Col>
          <Header showSideBar={onClick} />
          <Row>
            <Col>
              <p className={styles.hey}>Hey!</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className={styles.getOrder}>Lets get your order</p>
            </Col>
          </Row>
          <SearchBar />
          <ImageCard />
          <Row>
            <Col className={styles.p}>
              <p>Popular</p>
            </Col>
            <Col className={styles.view}>
              <p className={styles.viewAll}>
                View all
                <FontAwesomeIcon icon="angle-right" size="xs"></FontAwesomeIcon>
              </p>
            </Col>
          </Row>
          <SingleCard />
        </Col>
      </Row>
      <Footer />
    </>
  );
};
export default Home;
