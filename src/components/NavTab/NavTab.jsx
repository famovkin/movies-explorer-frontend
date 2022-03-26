import React from "react";

import "./NavTab.css";

function NavTab() {
  return (
    <nav className="nav-tab">
      <a className="nav-tab__link" href="1">
        О проекте
      </a>
      <a className="nav-tab__link" href="2">
        Технологии
      </a>
      <a className="nav-tab__link" href="3">
        Студент
      </a>
    </nav>
  );
}

export default NavTab;
