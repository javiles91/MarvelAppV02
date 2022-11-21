import React from "react";
import { useSelector } from "react-redux";
import styles from "./Bookmarks.module.css";
import CharacterCard from "../../components/characterCard/CharacterCard";
import ComicsCard from "../../components/comicCard/ComicCard";

const Bookmarks = () => {
  const { characters, comics, isLoading } = useSelector(
    (state) => state.bookmarks
  );

  const favCharacters =
    Object.keys(characters).length === 0 ? (
      <div className={styles["heading-2"]}>No favorite Characters saved</div>
    ) : (
      <div className={styles["cards-container"]}>
        {Object.values(characters).map((character) => {
          return (
            <CharacterCard
              name={character.name}
              img={character.img}
              key={character.id}
              id={character.id}
              description={character.description}
            />
          );
        })}
      </div>
    );

  const favComics =
    Object.keys(comics).length === 0 ? (
      <div className={styles["heading-2"]}>No favorite Comics saved</div>
    ) : (
      <div className={styles["cards-container"]}>
        {Object.values(comics).map((comic) => {
          return (
            <ComicsCard
              title={comic.title}
              img={comic.img}
              key={comic.id}
              id={comic.id}
            />
          );
        })}
      </div>
    );

  return (
    <div className={styles["main-container"]}>
      <div className={styles["title-cont"]}>
        <h1 className={styles["heading-1"]}>Marvel bookmarked characters </h1>
      </div>
      <div>{favCharacters}</div>
      <div className={styles["title-cont"]}>
        <h1 className={styles["heading-1"]}>Marvel bookmarked comics </h1>
      </div>
      <div>{favComics}</div>
    </div>
  );
};

export default Bookmarks;
