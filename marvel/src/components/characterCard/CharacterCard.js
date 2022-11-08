import React from "react";
import styles from "./CharacterCard.module.css";
import { Link } from "react-router-dom";

const CharacterCard = ({ name, img, id, description }) => {
  return (
    <div className={styles.card}>
      <Link to={`/character/${id}`} className={styles.link}>
        <img src={img} alt={name} className={styles["card-img"]} />
        <div className={styles["card-body"]}>
          <div className={styles["card-title"]}>{name}</div>
          <div className={styles.description}>
            <h3>{name}</h3>
            {description.length === 0
              ? "Description is not available"
              : description}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CharacterCard;
