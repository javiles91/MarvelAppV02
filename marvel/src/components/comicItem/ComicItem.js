import React from "react";
import styles from "./ComicItem.module.css";
import { Link } from "react-router-dom";

const ComicItem = ({ name, id }) => {
  return (
    <li>
      <Link to={`/comic/${id}`}>{name}</Link>
    </li>
  );
};

export default ComicItem;
