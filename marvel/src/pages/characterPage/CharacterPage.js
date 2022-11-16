import React, { useEffect } from "react";
import {
  fetchCharacterById,
  setCharacterId,
} from "../../features/character/characterSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CharacterPage.module.css";
import ComicStoryItem from "../../components/ComicStoryItem/ComicStoryItem";
import {
  addCharacter,
  removeCharacter,
} from "../../features/bookmarks/bookmarksSlice";
import Loading from "../../components/loading/Loading";

const CharacterPage = () => {
  const dispatch = useDispatch();
  const { characterId } = useParams();

  useEffect(() => {
    dispatch(setCharacterId(characterId));
  }, []);

  const { isLoading, character, id } = useSelector((state) => {
    return state.character;
  });

  const { characters } = useSelector((state) => state.bookmarks);
  const color = characters[id] === undefined ? "black" : "red";

  useEffect(() => {
    dispatch(fetchCharacterById(characterId));
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  const bookmarkHandler = () => {
    const characterObj = {
      [`${characterId}`]: {
        name: character.name,
        img: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        id: characterId,
        description: character.description,
      },
    };
    if (characters[characterId] === undefined) {
      dispatch(addCharacter(characterObj));
    } else {
      dispatch(removeCharacter(characterId));
    }
  };

  return (
    <div className={styles["main-container"]}>
      <h1 className={styles.title}>
        {character.name}{" "}
        <ion-icon
          style={{ color: color }}
          name="star"
          onClick={bookmarkHandler}
        ></ion-icon>
      </h1>
      <div className={styles["sub-container"]}>
        <div className={styles["left-container"]}>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt=""
          />
        </div>
        <div className={styles["right-container"]}>
          <p>{character.description}</p>

          <div className={styles.lists}>
            {character.comics.items.length < 1 ? (
              ""
            ) : (
              <div className={styles.comics}>
                <h2>Comics</h2>
                <ul>
                  {character.comics.items.map((comic) => {
                    const id = comic.resourceURI.split("/").pop();
                    return (
                      <ComicStoryItem
                        name={comic.name}
                        key={id}
                        id={id}
                        type="comic"
                      />
                    );
                  })}
                </ul>
              </div>
            )}

            {character.comics.items.length < 1 ? (
              ""
            ) : (
              <div className={styles.comics}>
                <h2>Stories</h2>
                <ul>
                  {character.stories.items.map((story) => {
                    const id = story.resourceURI.split("/").pop();

                    //ARREGLR CUANDO SE HAGA EL STORy SERVICE
                    return (
                      <ComicStoryItem
                        name={story.name}
                        key={id}
                        id={id}
                        type="story"
                      />
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
