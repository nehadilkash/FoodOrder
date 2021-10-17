import React from "react";
import styles from "./Profile.module.css";

const ProfilePicture = (props) => {
  console.log(props.image);
  return (
    <>
      <img className={styles.image} src={props.profile.icon} />
    </>
  );
};
export default ProfilePicture;
