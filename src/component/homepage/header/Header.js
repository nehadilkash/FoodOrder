import styles from "./Header.module.css";
import BurgerMenu from "./BurgerMenu";
import GeoLocation from "./GeoLocation";
import Profile from "./Profile";
import profileImage from "./logo.png";

function Header() {
  const data = {
    name: {
      firstName: "Neha",
      lastName: "Dilkash",
    },
    icon: profileImage,
  };
  return (
    <div className={styles.header}>
      <BurgerMenu />
      <GeoLocation />
      <Profile profile={data}></Profile>
    </div>
  );
}
export default Header;
