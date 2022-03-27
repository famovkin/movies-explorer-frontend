import React from "react";

import Icons from "../Icons";
import "./Project.css";

function Project({ title, url }) {
  return (
    <li className="project">
      <a href={url} className="project__link" target="_blank" rel="noreferrer">
        {title}
        <Icons.Arrow className="project__icon" />
      </a>
    </li>
  );
}

export default Project;
