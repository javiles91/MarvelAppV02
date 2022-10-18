import React from "react";
import styles from "./ComicCard.module.css";
import { Link } from "react-router-dom";

const ComicCard = ({ title, img, id }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt={title} className={styles["card-img"]} />
      <div className={styles["card-body"]}>
        <Link to={`/comic/${id}`} className={styles["card-title"]}>
          {title}
        </Link>
      </div>
    </div>
  );
};

export default ComicCard;
