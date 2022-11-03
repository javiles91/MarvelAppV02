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
import Filter from "../../components/filter/Filter";

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
    <div>
      {/* <Test /> */}
      <Filter />
      <h1 className={styles["heading-1"]}>
        Marvel Characters{" "}
        <button onClick={() => dispatch(toggleAscending())}>⇅ A/Z</button>
      </h1>

      <div className={styles["cards-container"]}>
        {characters.map((character) => {
          return (
            <CharacterCard
              name={character.name}
              img={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              key={character.id}
              id={character.id}
            />
          );
        })}
      </div>
      <Pagination page={page} type="characters" total={total} />
    </div>
  );
};

export default CharactersPage;
