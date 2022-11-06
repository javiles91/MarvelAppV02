import styles from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCharacterByName,
  resetValidityforName,
} from "../../features/character/characterSlice";
import {
  fetchComicByTitle,
  resetValidityforComic,
} from "../../features/comic/comicSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import FilterInput from "../../components/filterInput/FilterInput";
import { setType } from "../../features/filter/FilterSlice";

const Filter = () => {
  // console.log("filter render");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { filterType } = useSelector((state) => {
    return state.charactersFilter;
  });

  //To add event listener on submit button and enable it only the form has data to do a searchconst
  const nameRef = useRef(null);
  const submitRef = useRef(null);
  const comicFieldsContRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    submitRef.current.setAttribute("disabled", "");
    if (filterType === "name") {
      dispatch(resetValidityforComic());
      const handleInputEvent = (e) => {
        let nameInputValue = e.target.value;
        if (nameInputValue === "")
          submitRef.current.setAttribute("disabled", "");
        else submitRef.current.removeAttribute("disabled");
      };

      const nameInput = nameRef.current;

      nameInput.addEventListener("input", handleInputEvent);

      return () => {
        nameInput.removeEventListener("input", handleInputEvent);
      };
    }
    //
    if (filterType === "comic") {
      dispatch(resetValidityforName());
      const handleInputEvent = (e) => {
        console.log("char handler");
        const formData = new FormData(formRef.current);
        const { ComicTitle, issueNumber, startYear } = Object.fromEntries(
          formData.entries()
        );

        if ([ComicTitle, issueNumber, startYear].every((input) => input !== ""))
          submitRef.current.removeAttribute("disabled");
        else submitRef.current.setAttribute("disabled", "");
      };

      const comicFieldsParent = comicFieldsContRef.current;

      comicFieldsParent.addEventListener("input", handleInputEvent);

      return () => {
        comicFieldsParent.removeEventListener("input", handleInputEvent);
      };
    }
  }, [filterType]);

  //

  const { character, isValidCharacterName } = useSelector((state) => {
    return state.character;
  });

  const { comic, isValidComicName } = useSelector((state) => state.comic);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const { filterType, CharacterName, ComicTitle, issueNumber, startYear } =
      Object.fromEntries(data.entries());

    if (filterType === "name") {
      dispatch(fetchCharacterByName(CharacterName));
    } else if (filterType === "comic") {
      dispatch(fetchComicByTitle({ ComicTitle, issueNumber, startYear }));
    }
  };

  const useDidMountEffect = (fn) => {
    const didMount = useRef(false);

    useEffect(() => {
      if (didMount.current) {
        fn();
      } else {
        didMount.current = true;
        dispatch(setType("name"));
      }

      return () => {
        dispatch(resetValidityforName());
        dispatch(resetValidityforComic());
      };
    }, [character, comic]);
  };

  useDidMountEffect(() => {
    if (filterType === "name") navigate(`/character/${character.id}`);
    else if (filterType === "comic") navigate(`/comic/characters/${comic.id}`);
  });

  const characterSearchFields = (
    <div className={`${styles["char-field"]} `}>
      <FilterInput
        reference={nameRef}
        onChange={() => {
          console.log("userName");
        }}
        type="text"
        name="CharacterName"
        label="Character name"
        // errorMessage="not a valid name"
        placeholder="Wolverine"
        required={true}
        id={1}
      />
    </div>
  );

  const comicSearchField = (
    <div
      className={`${styles["comic-fields"]} ${
        filterType === "comic" ? "" : styles.hide
      }`}
      ref={comicFieldsContRef}
    >
      <FilterInput
        onChange={() => {
          console.log("title");
        }}
        type="text"
        name="ComicTitle"
        label="Title"
        // errorMessage="not a valid title"
        placeholder="Hulk"
        required={true}
        id={2}
      />
      <FilterInput
        onChange={() => console.log("issue number")}
        type="number"
        name="issueNumber"
        label="Issue number"
        // errorMessage="not a valid number"
        placeholder="53"
        required={true}
        id={3}
      />
      <FilterInput
        onChange={() => console.log("start Year")}
        type="number"
        name="startYear"
        label="Start year"
        // errorMessage="not a valid year"
        placeholder="2008"
        required={true}
        id={4}
      />
    </div>
  );

  const isValidSearch = () => {
    if (filterType === "name") return isValidCharacterName;
    else if (filterType === "comic") return isValidComicName;
  };

  return (
    <>
      <form className={styles.cont} onSubmit={submitHandler} ref={formRef}>
        <div className={styles["select-cont"]}>
          <label htmlFor="options">Search characters by:</label>
          <select
            id="options"
            name="filterType"
            onChange={(e) => dispatch(setType(e.target.value))}
          >
            <option value="name">Name</option>
            <option value="comic">Comic</option>
          </select>
        </div>

        {filterType === "name" ? (
          <div>{characterSearchFields}</div>
        ) : (
          <div>{comicSearchField}</div>
        )}

        <input type="submit" value="Submit" ref={submitRef} disabled />
        <span
          style={{
            display: isValidSearch() ? "none" : "block",
          }}
        >
          Not a valid search
        </span>
      </form>
    </>
  );
};

export default Filter;
