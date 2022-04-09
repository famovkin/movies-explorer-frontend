import React from "react";

import "./Container.css";

const Container = ({ children, modifier }) => {
  return (
    <div className={`container app__container ${modifier || ""}`}>
      {children}
    </div>
  );
};

export default Container;
