import SearchBar from "./body/SearchBar";
import ImageCard from "./body/ImageCard";
import Footer from "./Footer";
import Header from "./header/Header";
import styles from "./Home.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import SingleCard from "./body/SingleCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuBar from "./MenuBar/MenuBar";
import React, { useState } from "react";

const Home = () => {
  const [showMenuBar, setShowMenuBar] = useState(false);

  const toggleMenu = () => {
    console.log("clicked");
    if (showMenuBar == true) {
      setShowMenuBar(false);
    } else {
      setShowMenuBar(true);
    }

    console.log(showMenuBar);
  };

  const closeMenu = () => {
    setShowMenuBar(false);
    console.log("closing");
  };

  return (
    <>
      <div className={styles.row}>
        <div
          className={`${
            !showMenuBar ? styles.withoutOverlay : styles.overlay
          } `}
        >
          {showMenuBar ? <MenuBar /> : null}
        </div>
        <div className={styles.secondCol}>
          <Header showSideBar={toggleMenu} />
          <div onClick={closeMenu}>
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
                  <FontAwesomeIcon
                    icon="angle-right"
                    size="xs"
                  ></FontAwesomeIcon>
                </p>
              </Col>
            </Row>
            <SingleCard />
            <div className={styles.down} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
