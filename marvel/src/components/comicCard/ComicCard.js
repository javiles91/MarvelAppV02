import React from "react";
import styles from "./ComicCard.module.css";
import { Link } from "react-router-dom";

const ComicCard = ({ title, img, id }) => {
  return (
    <div className={styles.card}>
      <Link to={`/comic/${id}`} className={styles.link}>
        <img src={img} alt={title} className={styles["card-img"]} />
      </Link>
      <div className={styles["card-title"]}>{title}</div>
    </div>
  );
};

export default ComicCard;
