import React from "react";
import styles from "./FilterInput.module.css";

const FilterInput = (props) => {
  const {
    label,
    errorMessage,
    onChange,
    type,
    name,
    placeholder,
    required,
    reference = null,
    id,
  } = props;

  return (
    <div className={styles.formInput}>
      <label>{label}</label>
      <input
        ref={reference}
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        key={id}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FilterInput;
