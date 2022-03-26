import React from "react";

import "./Container.css";

function Container({ children }) {
  return <div className="container app__container">{children}</div>;
}

export default Container;
