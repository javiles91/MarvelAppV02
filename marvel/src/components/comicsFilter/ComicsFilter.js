import React, { useEffect } from "react";
import FilterInput from "../filterInput/FilterInput";
import styles from "./comicsFilter.module.css";
import { fetchComics } from "../../features/comics/ComicsSlice";
import { useDispatch, useSelector } from "react-redux";

const ComicsFilter = () => {
  const dispatch = useDispatch();
  const { isValidSearch } = useSelector((state) => {
    return state.comics;
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formObj = Object.fromEntries(data.entries());

    if (Object.values(formObj).every((value) => value === "")) return;

    const { title, issueNumber, format } = formObj;

    dispatch(fetchComics({ offset: 0, title, issueNumber, format }));
  };

  const comicSearchFields = (
    <div className={styles.cont}>
      <FilterInput
        onChange={() => console.log("Comic title")}
        type="text"
        name="title"
        label="Title"
        placeholder="Hulk"
        required={false}
      />
      <FilterInput
        onChange={() => console.log("Comic issueNumber")}
        type="number"
        name="issueNumber"
        label="Issue Number"
        placeholder="53"
        required={false}
      />
      <div className={styles["format-cont"]}>
        <label htmlFor="format">Select format</label>
        <select
          id="format"
          name="format"
          onChange={() => console.log("comics format")}
        >
          <option value="" default></option>
          <option value="comic">Comic</option>
          <option value="magazine">Magazine</option>
          <option value="trade paperback">Trade paperback</option>
          <option value="hardcover">Hardcover</option>
          <option value="digest">Digest</option>
          <option value="graphic novel">Graphic novel</option>
          <option value="digital comic">Digital comic</option>
          <option value="infinite comic">Infinite comic</option>
        </select>
      </div>
    </div>
  );

  return (
    <form className={styles["form-cont"]} onSubmit={submitHandler}>
      <div>{comicSearchFields}</div>
      <div>
        <input type="submit" value="Submit" />
        <button
          onClick={() => {
            dispatch(fetchComics({ offset: 0 }));
          }}
        >
          Clear filter
        </button>
      </div>

      <span style={{ display: isValidSearch ? "" : "block" }}>
        Not a valid search
      </span>
    </form>
  );
};

export default ComicsFilter;
