// import { Card, CardGroup } from "react-bootstrap";
import pizza from "./pizza.jpg";
import burger from "./Burger.jpg";
import cakes from "./cakes.jpg";
import MyCard from "./MyCard";
import styles from "./ImageCard.module.css";
import { Container, Row, div } from "react-bootstrap";
const ImageCard = () => {
  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <MyCard image={burger} name="Burger"></MyCard>
      </div>
      <div className={styles.col}>
        <MyCard image={pizza} name="Pizza"></MyCard>
      </div>
      <div className={styles.col}>
        <MyCard image={cakes} name="Cakes"></MyCard>
      </div>
    </div>
  );
};
export default ImageCard;
