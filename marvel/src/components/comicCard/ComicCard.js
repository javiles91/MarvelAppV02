import React, { useRef } from "react";
import styles from "./ComicCard.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addComic, removeComic } from "../../features/bookmarks/bookmarksSlice";

const ComicCard = ({ title, img, id }) => {
  const dispatch = useDispatch();
  const bookmarkIconRef = useRef("null");
  const { comics } = useSelector((state) => state.bookmarks);
  const comicId = id;

  const bookmarkHandler = () => {
    const comicObj = { [`${comicId}`]: { title, img, id } };

    if (comics[comicId] === undefined) {
      dispatch(addComic(comicObj));
    } else {
      dispatch(removeComic(comicId));
    }
  };

  const color = comics[id] === undefined ? "white" : "red";

  return (
    <div className={styles.card}>
      <Link to={`/comic/${id}`} className={styles.link}>
        <img src={img} alt={title} className={styles["card-img"]} />
      </Link>
      <div className={styles["card-title"]}>{title}</div>
      <div className={styles.bookmarking}>
        <h4>Add to favorites</h4>
        <ion-icon
          name="bookmark"
          onClick={bookmarkHandler}
          ref={bookmarkIconRef}
          style={{ color: color }}
        ></ion-icon>
      </div>
    </div>
  );
};

export default ComicCard;
