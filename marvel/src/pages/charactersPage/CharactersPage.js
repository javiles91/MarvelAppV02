import React from "react";
import CharacterCard from "../../components/characterCard/CharacterCard";
import { useSelector } from "react-redux";
import styles from "./CharactersPage.module.css";

const CharactersPage = () => {
  const { isLoading, characters } = useSelector((state) => state.characters);

  console.log(characters);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className={styles["heading-1"]}>Marvel Characters</h1>
      <div className={styles["cards-container"]}>
        {characters.map((character) => {
          return (
            <CharacterCard
              name={character.name}
              img={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              key={character.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CharactersPage;
