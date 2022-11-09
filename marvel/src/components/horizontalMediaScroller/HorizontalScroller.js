import React, { useEffect } from "react";
// import {
//   fetchCharactersForScroller,
//   fetchComicsForScroller,
// } from "../../features/horizontalScroller/HorizontalScrollerSlice";
import styles from "./HorizontalScroller.module.css";
import CharacterCard from "../characterCard/CharacterCard";
import ComicCard from "../comicCard/ComicCard";

const HorizontalScroller = ({ cardItems, cardType }) => {
  return (
    <div className={styles["media-scroller"]}>
      {cardItems.map((item) => {
        return (
          <div key={item.id}>
            {cardType === "comics" ? (
              <ComicCard
                name={item.name}
                img={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                key={item.id}
                id={item.id}
                description={item.description}
              />
            ) : (
              <CharacterCard
                name={item.name}
                img={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                key={item.id}
                id={item.id}
                description={item.description}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HorizontalScroller;
