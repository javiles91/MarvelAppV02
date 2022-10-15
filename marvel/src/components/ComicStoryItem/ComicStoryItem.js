import React from "react";
import styles from "./ComicStoryItem.module.css";
import { Link } from "react-router-dom";

const ComicStoryItem = ({ name, id, type }) => {
  return (
    <li>
      <Link to={`/${type}/${id}`}>{name}</Link>
    </li>
  );
};

export default ComicStoryItem;
