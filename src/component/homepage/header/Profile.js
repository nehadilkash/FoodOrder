import React from "react";
import styles from "./Profile.module.css";

const ProfilePicture = (props) => {
  console.log(props.image);
  return (
    <div className={styles.profile}>
      <img className={styles.image} src={props.profile.icon} />

      <p>Hello {props.profile.name.firstName}!</p>
    </div>
  );
};
export default ProfilePicture;
