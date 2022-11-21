import React, { useRef } from "react";
import styles from "./CharacterCard.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addCharacter,
  removeCharacter,
} from "../../features/bookmarks/bookmarksSlice";

const CharacterCard = ({ name, img, id, description }) => {
  const dispatch = useDispatch();

  const { characters } = useSelector((state) => state.bookmarks);
  const characterId = id;

  const bookmarkHandler = () => {
    const characterObj = { [`${characterId}`]: { name, img, id, description } };
    if (characters[characterId] === undefined) {
      dispatch(addCharacter(characterObj));
    } else {
      dispatch(removeCharacter(characterId));
    }
  };

  const color = characters[id] === undefined ? "white" : "red";

  return (
    <div className={styles.card}>
      <div className={styles.bookmarking}>
        <h4>Add to favorites</h4>
        <ion-icon
          name="bookmark"
          onClick={bookmarkHandler}
          style={{ color: color }}
        ></ion-icon>
      </div>
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
