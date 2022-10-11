import React from "react";
import styles from "./CharacterCard.module.css";

const CharacterCard = ({ name, img }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt={name} className={styles["card-img"]} />
      <div className={styles["card-body"]}>
        <h5 className={styles["card-title"]}>{name}</h5>
      </div>
    </div>
  );
};

export default CharacterCard;
