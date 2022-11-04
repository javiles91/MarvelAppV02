import React from "react";
import styles from "./FilterInput.module.css";

const FilterInput = (props) => {
  const { label, errorMessage, onChange, type, name, placeholder, required } =
    props;

  return (
    <div className={styles.formInput}>
      <label>{label}</label>
      <input
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FilterInput;
