import React from "react";

import "./Input.css";

function Input({ label, type, error }) {
  return (
    <div className="input unauth-page__input">
      <label className="input__label" forhtml={type}>
        {label}
      </label>
      <input className="input__field" type="text" id={type} name={type}></input>
      <span className="input__error">{error}</span>
    </div>
  );
}

export default Input;
