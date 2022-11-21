import React, { useEffect } from "react";
import Slider from "../../components/slider/Slider";
import HorizontalScroller from "../../components/horizontalMediaScroller/HorizontalScroller";
import {
  fetchComicsForScroller,
  fetchCharactersForScroller,
} from "../../features/horizontalScroller/HorizontalScrollerSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./homePage.module.css";
import { Link } from "react-router-dom";


function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharactersForScroller({ offset: 320 }));
    dispatch(fetchComicsForScroller({ orderBy: "-issueNumber" }));
  }, []);

  const { characters, comics } = useSelector(
    (state) => state.horizontalScroller
  );

  const sliderContStyle = {
    width: "100%",
    height: "680px",
    margin: "0 auto",
  };

  return (
    <div className={styles.cont}>
      <div style={sliderContStyle}>
        <Slider />
      </div>
      <Link to={`characters/${1}`} className={styles.heading1}>
        Marvel Characters
      </Link>
      <HorizontalScroller cardItems={characters} cardType="characters" />
      <Link to={`comics/1`} className={styles.heading1}>
        Marvel Comics
      </Link>

      <HorizontalScroller cardItems={comics} cardType="comics" />
      
    </div>
  );
}

export default HomePage;
