import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <nav className={styles.container}>
        <Link to="/">Home</Link>
        <Link to="characters">Characters</Link>
        <Link to="comics">Comics</Link>
        <Link to="stories">Stories</Link>
      </nav>
      <hr />
    </>
  );
};

export default NavBar;
