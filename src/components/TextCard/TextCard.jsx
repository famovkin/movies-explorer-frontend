import React from "react";

import "./TextCard.css";

const TextCard = ({ title, description }) => {
  return (
    <div className="text-card">
      <h3 className="text-card__title">{title}</h3>
      <p className="text-card__description">{description}</p>
    </div>
  );
};

export default TextCard;
