import React, { useEffect } from "react";
import { fetchComicById } from "../../features/comic/comicSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./ComicPage.module.css";

const ComicPage = () => {
  const dispatch = useDispatch();
  const { comicId } = useParams();

  const { comic, isLoading } = useSelector((state) => {
    return state.comic;
  });

  console.log(comic);

  useEffect(() => {
    dispatch(fetchComicById(comicId));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{comic.title}</h1>
      <div className={styles["sub-container"]}>
        <div className={styles["left-container"]}>
          <img
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt=""
          />
        </div>
        <div className={styles["right-container"]}>
          <p>{comic.description} </p>
          <div>
            <h2>Characters</h2>
            <ul>
              {comic.characters.items.map((character) => {
                return <li>{character.name}</li>;
              })}
            </ul>
          </div>
          <div>
            <h2>Stories</h2>
            <ul>
              {comic.stories.items.map((storie) => {
                return <li>{storie.name}</li>;
              })}
            </ul>
          </div>
          <div>
            <h2>Creators</h2>
            <ul>
              {comic.creators.items.map((creator) => {
                return (
                  <li>
                    {creator.name} as {creator.role}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicPage;