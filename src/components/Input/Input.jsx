import React from "react";

import "./Input.css";

function Input({ label, type, error, modifier }) {
  return (
    <>
      <div className={`input unauth-page__input input_type_${modifier}`}>
        <label
          className={`input__label input__label_type_${modifier}`}
          htmlFor={type}
        >
          {label}
        </label>
        <input
          className={`input__field input__field_type_${modifier}`}
          type="text"
          id={type}
          name={type}
        ></input>
      </div>
      <span className={`input__error input__error_type_${modifier}`}>
        {error}
      </span>
    </>
  );
}

export default Input;
