import React from "react";
import styles from "./Pagination.module.css";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Pagination = ({ page, nextPage, previousPage, type, total }) => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav className={styles.cont}>
      <ul className={styles.pagination}>
        <li
          className={styles["change-page"]}
          onClick={() => {
            navigate(`/${type}/${1}`);
          }}
        >
          «
        </li>
        <li
          className={styles["change-page"]}
          onClick={() => {
            if (page === 1) return;
            navigate(`/${type}/${page - 1}`);
          }}
        >
          ‹
        </li>
        <li className={styles["current"]}>{page}</li>
        <li
          className={styles["change-page"]}
          onClick={() => {
            navigate(`/${type}/${page + 1}`);
          }}
        >
          ›
        </li>
        <li
          className={styles["change-page"]}
          onClick={() => {
            //20 because I am rendering  20 cards per page
            navigate(`/${type}/${Math.ceil(total / 20)}`);
          }}
        >
          »
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
