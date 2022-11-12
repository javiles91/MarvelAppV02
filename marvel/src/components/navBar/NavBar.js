import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { fetchComics, setIsFiltered } from "../../features/comics/ComicsSlice";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  // const { page } = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  const { isFiltered } = useSelector((state) => {
    return state.comics;
  });

  const comicLinkHandler = () => {
    if (isFiltered) {
      dispatch(fetchComics({ offset: 0 }));
      dispatch(setIsFiltered(false));
    } else return;
  };

  return (
    <>
      <nav className={styles.container}>
        <Link to="/">Home</Link>
        <Link to={`characters/${1}`}>Characters</Link>
        <Link to={`comics/1`} onClick={comicLinkHandler}>
          Comics
        </Link>
        <Link to={"bookmarks"}>Bookmarks</Link>
      </nav>
    </>
  );
};

export default NavBar;
