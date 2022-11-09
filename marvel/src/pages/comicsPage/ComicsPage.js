import React, { useEffect } from "react";
import ComicsCard from "../../components/comicCard/ComicCard";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ComicsPage.module.css";
import {
  fetchComics,
  toggleAscending,
} from "../../features/comics/ComicsSlice";
import { useParams } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";
import { setPageAndOffset } from "../../features/comics/ComicsSlice";
import ComicsFilter from "../../components/comicsFilter/ComicsFilter";

const ComicsPage = () => {
  const dispatch = useDispatch();
  const { comicsPage } = useParams();

  useEffect(() => {
    dispatch(setPageAndOffset(comicsPage));
  }, [comicsPage]);

  const { isLoading, comics, page, offset, total, ascending } = useSelector(
    (state) => state.comics
  );

  useEffect(() => {
    let orderBy = "issueNumber";
    if (!ascending) orderBy = "-issueNumber";
    dispatch(fetchComics({ offset, orderBy }));
  }, [offset, ascending]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={styles["main-container"]}>
      <ComicsFilter />
      <div className={styles["title-cont"]}>
        <h1 className={styles["heading-1"]}>Marvel Comics</h1>
        <button
          onClick={() => dispatch(toggleAscending())}
          className={styles["sort-btn"]}
        >
          ⇅ Issue number
        </button>
      </div>
      <div className={styles["cards-container"]}>
        {comics.map((comic) => {
          return (
            <ComicsCard
              title={comic.title}
              img={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              key={comic.id}
              id={comic.id}
            />
          );
        })}
      </div>
      <Pagination page={page} total={total} type="comics" />
    </div>
  );
};

export default ComicsPage;
