import React from "react";

import "./Button.css";

function Button({ children, className, type = "button", handler }) {
  return (
    <button className={`button ${className}`} type={type} onClick={handler}>
      {children}
    </button>
  );
}

export default Button;
