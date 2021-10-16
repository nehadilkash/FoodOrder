import styles from "./MyCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const MyCard = (props) => {
  return (
    <>
      <div className={styles.col}>
        <img className={styles.img} src={props.image} />
        <p className={styles.para}>{props.name}</p>
        <button className={styles.button}>&gt;</button>
      </div>
    </>
  );
};
export default MyCard;
