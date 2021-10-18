import React from "react";
import styles from "./Profile.module.css";

const ProfilePicture = (props) => {
  console.log(props.image);
  return (
    <div className={styles.div}>
      <img className={styles.image} src={props.profile.icon} />
    </div>
  );
};
export default ProfilePicture;
