import React from "react";
import styles from "./ComicStoryItem.module.css";
import { Link } from "react-router-dom";

const ComicStoryItem = ({ name, id, type }) => {
  return (
    <li className={styles["list-item"]}>
      <Link to={`/${type}/${id}`} className={styles.link}>
        {name}{" "}
      </Link>
    </li>
  );
};

export default ComicStoryItem;
