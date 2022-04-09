import React from "react";

import { navTabs } from "../../utils/constants";
import "./NavTab.css";

const NavTab = () => {
  return (
    <nav className="nav-tab">
      {navTabs.map((tab) => (
        <a className="nav-tab__link" key={tab.id} href={tab.url}>
          {tab.title}{" "}
        </a>
      ))}
    </nav>
  );
};

export default NavTab;
