import React, { useEffect } from "react";
import CharacterCard from "../../components/characterCard/CharacterCard";
import { useSelector, useDispatch } from "react-redux";
import styles from "./CharactersPage.module.css";
import Pagination from "../../components/pagination/Pagination";
import {
  nextPage,
  previousPage,
  setPageAndOffset,
} from "../../features/characters/charactersSlice";
import { fetchCharacters } from "../../features/characters/charactersSlice";
import { useParams } from "react-router-dom";
import Filter from "../../components/filter/Filter";

// const Test = () => {
//   useEffect(() => {
//     console.log("inner useEffct");
//     return () => {
//       // didUnmount.current = true;
//       // console.log(didUnmount);
//       console.log("clean up");
//     };
//   }, []);
//   // console.log(didUnmount);

//   return <div>test</div>;
// };

const CharactersPage = () => {
  // console.log("render");
  const dispatch = useDispatch();
  const { pageNumber } = useParams();

  useEffect(() => {
    // console.log("page offset");
    dispatch(setPageAndOffset(pageNumber));
  }, []);

  const { isLoading, characters, page, offset } = useSelector(
    (state) => state.characters
  );

  useEffect(() => {
    // console.log("fetch characters");
    dispatch(fetchCharacters(offset));
  }, [offset]);

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
      <h1 className={styles["heading-1"]}>Marvel Characters</h1>
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
      <Pagination
        page={page}
        nextPage={nextPage}
        previousPage={previousPage}
        type="characters"
      />
    </div>
  );
};

export default CharactersPage;
