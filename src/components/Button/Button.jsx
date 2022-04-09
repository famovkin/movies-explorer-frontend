import React from "react";

import "./Button.css";

const Button = ({
  children,
  className,
  type = "button",
  handler,
  isFormValid = true,
  isLoading,
}) => {
  return (
    <button
      className={`button ${className}`}
      type={type}
      onClick={handler}
      disabled={!isFormValid || isLoading}
    >
      {children}
    </button>
  );
};

export default Button;
