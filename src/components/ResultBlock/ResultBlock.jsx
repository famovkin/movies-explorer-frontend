import React from "react";

import Preloader from "../Preloader/Preloader";
import "./ResultBlock.css";

function ResultBlock({ title, isLoading }) {
  return (
    <div className="result-block">
      {!isLoading ? (
        <h2 className="result-block__title">{title}</h2>
      ) : (
        <Preloader />
      )}
    </div>
  );
}

export default ResultBlock;
