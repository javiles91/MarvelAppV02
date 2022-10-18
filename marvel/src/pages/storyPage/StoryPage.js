import React, { useEffect } from "react";
import styles from "./StoryPage.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStoryById } from "../../features/story/storySlice";

const StoryPage = () => {
  const dispatch = useDispatch();
  const { storyId } = useParams();

  useEffect(() => {
    dispatch(fetchStoryById(storyId));
  }, []);

  const { story, isLoading } = useSelector((state) => state.story);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{story.title}</h1>
      <p>{story.description}</p>
      <div className={styles["sub-container"]}>
        {story.characters.items.length < 1 ? (
          ""
        ) : (
          <div className={styles.characters}>
            <h2>Characters</h2>
            <ul>
              {story.characters.items.map((character) => {
                const id = character.resourceURI.split("/").pop();
                return <li key={id}>{character.name}</li>;
              })}
            </ul>
          </div>
        )}
        {/* // */}
        {story.characters.items.length < 1 ? (
          ""
        ) : (
          <div className={styles.comics}>
            <h2>Comics</h2>
            <ul>
              {story.comics.items.map((comic) => {
                const id = comic.resourceURI.split("/").pop();

                return <li key={id}>{comic.name}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryPage;
