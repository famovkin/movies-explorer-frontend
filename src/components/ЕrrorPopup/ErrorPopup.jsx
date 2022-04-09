import React from "react";

import "./ErrorPopup.css";

const ErrorPopup = ({ text, isVisible }) => {
  return (
    <div className={`error-popup ${isVisible ? "error-popup_visible" : ""}`}>
      <p className="error-popup__text">{text}</p>
    </div>
  );
};

export default ErrorPopup;
