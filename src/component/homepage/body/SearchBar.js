import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SearchBar.module.css";
import { Container, Row, Col } from "react-bootstrap";
const SearchBar = () => {
  return (
    <>
      <Container>
        <Row className={styles.row}>
          <Col xs={1}>
            <FontAwesomeIcon className={styles.icon} icon="search" size="lg" />
          </Col>
          <Col>
            <input
              className={styles.text}
              type="text"
              placeholder="search our delecious burger"
            />
          </Col>
        </Row>
      </Container>
    </>
    //   <InputGroup className="mb-3">
    //          <FormControl
    //       aria-label="Example text with button addon"
    //       aria-describedby="basic-addon1"
    //     />
    //   </InputGroup>
  );
};
export default SearchBar;
