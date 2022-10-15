import React, { useEffect } from "react";
import { fetchCharacterById } from "../../features/character/characterSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CharacterPage.module.css";
import ComicItem from "../../components/comicItem/ComicItem";

const CharacterPage = () => {
  const dispatch = useDispatch();
  const { characterId } = useParams();

  useEffect(() => {
    dispatch(fetchCharacterById(characterId));
  }, []);

  const { isLoading, character } = useSelector((state) => {
    return state.character;
  });

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={styles["main-container"]}>
      <h1 className={styles.title}>{character.name}</h1>
      <div className={styles["sub-container"]}>
        <div className={styles["left-container"]}>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt=""
          />
        </div>
        <div className={styles["right-container"]}>
          <p>{character.description}</p>

          {character.comics.items.length < 1 ? (
            ""
          ) : (
            <div className={styles.comics}>
              <h2>Comics</h2>
              <ul>
                {character.comics.items.map((comic) => {
                  const id = comic.resourceURI.split("/").pop();
                  return <ComicItem name={comic.name} key={id} id={id} />;
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
