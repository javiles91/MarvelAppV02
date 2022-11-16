import React, { useEffect } from "react";
import { fetchComicById } from "../../features/comic/comicSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./ComicPage.module.css";
import { addComic, removeComic } from "../../features/bookmarks/bookmarksSlice";
import Loading from "../../components/loading/Loading";

const ComicPage = () => {
  const dispatch = useDispatch();
  const { comicId } = useParams();

  const { comic, isLoading } = useSelector((state) => {
    return state.comic;
  });

  const { comics } = useSelector((state) => state.bookmarks);

  useEffect(() => {
    dispatch(fetchComicById(comicId));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const bookmarkHandler = () => {
    const comicObj = {
      [`${comicId}`]: {
        title: comic.title,
        img: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
        id: comicId,
      },
    };

    if (comics[comicId] === undefined) {
      dispatch(addComic(comicObj));
    } else {
      dispatch(removeComic(comicId));
    }
  };

  const color = comics[comicId] === undefined ? "black" : "red";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {comic.title}{" "}
        <ion-icon
          style={{ color: color }}
          name="star"
          onClick={bookmarkHandler}
        ></ion-icon>
      </h1>
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
                const id = character.resourceURI.split("/").pop();
                return <li key={id}>{character.name}</li>;
              })}
            </ul>
          </div>
          <div>
            <h2>Stories</h2>
            <ul>
              {comic.stories.items.map((storie) => {
                const id = storie.resourceURI.split("/").pop();
                return <li key={id}>{storie.name}</li>;
              })}
            </ul>
          </div>
          <div>
            <h2>Creators</h2>
            <ul>
              {comic.creators.items.map((creator) => {
                const id = creator.resourceURI.split("/").pop();
                return (
                  <li key={id}>
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
