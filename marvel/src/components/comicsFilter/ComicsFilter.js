import React, { useEffect, useRef } from "react";
import FilterInput from "../filterInput/FilterInput";
import styles from "./comicsFilter.module.css";
import { fetchComics, setIsFiltered } from "../../features/comics/ComicsSlice";
import { useDispatch, useSelector } from "react-redux";

const ComicsFilter = () => {
  const dispatch = useDispatch();
  const { isValidSearch, isFiltered } = useSelector((state) => {
    return state.comics;
  });

  //Adding evet listener to submit input to control if it is clickable or not

  const submitRef = useRef(null);
  const formRef = useRef(null);
  const inputsParentRef = useRef(null);

  useEffect(() => {
    const handleInputEvent = (e) => {
      console.log("eventHandler");
      const formData = new FormData(formRef.current);
      const { title, issueNumber, format } = Object.fromEntries(
        formData.entries()
      );

      console.log(
        Boolean([title, issueNumber, format].some((input) => input !== ""))
      );

      if ([title, issueNumber, format].some((input) => input !== "")) {
        submitRef.current.removeAttribute("disabled");
      } else submitRef.current.setAttribute("disabled", "");
    };
    const inputsParent = inputsParentRef.current;

    inputsParent.addEventListener("input", handleInputEvent);

    return () => {
      inputsParent.removeEventListener("input", handleInputEvent);
    };
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formObj = Object.fromEntries(data.entries());

    if (Object.values(formObj).every((value) => value === "")) return;

    const { title, issueNumber, format } = formObj;

    dispatch(fetchComics({ offset: 0, title, issueNumber, format }));

    dispatch(setIsFiltered(true));
  };

  const comicSearchFields = (
    <div className={styles.cont} ref={inputsParentRef}>
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
    <form
      className={styles["form-cont"]}
      onSubmit={submitHandler}
      ref={formRef}
    >
      <div>{comicSearchFields}</div>
      <div>
        <input type="submit" value="Submit" ref={submitRef} disabled />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(fetchComics({ offset: 0 }));
            dispatch(setIsFiltered(false));
          }}
          style={{ display: isFiltered ? "block" : "none" }}
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
