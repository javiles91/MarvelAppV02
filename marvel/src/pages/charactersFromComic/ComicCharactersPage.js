import React, { useEffect } from "react";
import styles from "./ComicCharactersPage.module.css";
import {
  fetchCharactersByComicId,
  fetchComicByTitle,
} from "../../features/characters/charactersFromComicSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CharacterCard from "../../components/characterCard/CharacterCard";

const ComicCharactersPage = () => {
  const dispatch = useDispatch();
  const { comicId } = useParams();

  const { characters, isLoading, comicTitle } = useSelector(
    (state) => state.charactersFromComic
  );

  useEffect(() => {
    dispatch(fetchComicByTitle(comicId));
    dispatch(fetchCharactersByComicId(comicId));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className={styles["heading-1"]}>{comicTitle}</h1>
      <div className={styles["cards-container"]}>
        {characters.map((character) => {
          return (
            <CharacterCard
              name={character.name}
              img={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              key={character.id}
              id={character.id}
              description={character.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ComicCharactersPage;
