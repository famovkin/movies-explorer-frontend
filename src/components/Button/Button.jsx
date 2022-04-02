import React from "react";

import "./Button.css";

function Button({
  children,
  className,
  type = "button",
  handler,
  isFormValid = true,
}) {
  return (
    <button
      className={`button ${className}`}
      type={type}
      onClick={handler}
      disabled={!isFormValid}
    >
      {children}
    </button>
  );
}

export default Button;
