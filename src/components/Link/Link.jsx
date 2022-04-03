import React from "react";

import "./Link.css";

function Link({ title, url, modifier }) {
  return (
    <li className="link">
      <a
        className={`link__item link__item_type_${modifier}`}
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {title}
      </a>
    </li>
  );
}

export default Link;
