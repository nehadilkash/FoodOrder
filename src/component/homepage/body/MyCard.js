import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./MyCard.module.css";
function test() {
  console.log("its working");
}

const MyCard = (props) => {
  return (
    <>
      <img className={styles.img} src={props.image} />
      <p className={styles.para}>{props.name}</p>
      <FontAwesomeIcon
        className={styles.icon}
        icon="chevron-circle-right"
        size="lg"
        onClick={test}
      />
    </>
  );
};
export default MyCard;
