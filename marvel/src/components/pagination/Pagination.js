import React from "react";
import styles from "./Pagination.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Pagination = ({ page, nextPage, previousPage }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav>
      <ul className={styles.pagination}>
        <li
          className={styles["change-page"]}
          onClick={() => {
            dispatch(previousPage());
            if (page === 1) return;
            navigate(`/characters/${page - 1}`);
          }}
        >
          Previous
        </li>
        <li className={styles["current"]}>{page}</li>
        <li
          className={styles["change-page"]}
          onClick={() => {
            dispatch(nextPage());
            navigate(`/characters/${page + 1}`);
          }}
        >
          Next
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
