import React, { useEffect } from "react";
import CharacterCard from "../../components/characterCard/CharacterCard";
import { useSelector, useDispatch } from "react-redux";
import styles from "./CharactersPage.module.css";
import Pagination from "../../components/pagination/Pagination";
import {
  setPageAndOffset,
  toggleAscending,
} from "../../features/characters/charactersSlice";
import { fetchCharacters } from "../../features/characters/charactersSlice";
import { useParams } from "react-router-dom";
import Filter from "../../components/charactersfilter/Filter";

const CharactersPage = () => {
  // console.log("render");
  const dispatch = useDispatch();
  const { pageNumber } = useParams();

  useEffect(() => {
    // console.log("page offset");
    dispatch(setPageAndOffset(pageNumber));
  }, [pageNumber]);

  const { isLoading, characters, page, offset, ascending, total } = useSelector(
    (state) => state.characters
  );

  useEffect(() => {
    // console.log("fetch characters");
    let orderBy = "name";
    if (!ascending) orderBy = "-name";
    dispatch(fetchCharacters({ offset, orderBy }));
  }, [offset, ascending]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={styles["main-container"]}>
      {/* <Test /> */}
      <Filter />
      <div className={styles["title-cont"]}>
        <h1 className={styles["heading-1"]}>Marvel Characters </h1>
        <button
          onClick={() => dispatch(toggleAscending())}
          className={styles["sort-btn"]}
        >
          ⇅ A/Z
        </button>
      </div>

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
      <Pagination page={page} type="characters" total={total} />
    </div>
  );
};

export default CharactersPage;
