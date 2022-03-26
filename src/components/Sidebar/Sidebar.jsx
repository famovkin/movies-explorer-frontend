import React from "react";

import AccountButton from "../AccountButton/AccountButton";
import Icons from "../Icons/";
import "./Sidebar.css";

function Sidebar({ isOpen, closeHandler }) {
  return (
    <div className={`app__overlay ${isOpen ? "app__overlay_visible" : ""}`}>
      <div
        className={`sidebar ${isOpen ? "sidebar_visible" : "sidebar_hidden"}`}
      >
        <ul className="sidebar__links">
          <li className="sidebar__link">Главная</li>
          <li className="sidebar__link">Фильмы</li>
          <li className="sidebar__link sidebar__link_active">
            Сохраненные фильмы
          </li>
        </ul>
        <AccountButton />
        <Icons.Close className="sidebar__close-icon" handler={closeHandler} />
      </div>
    </div>
  );
}

export default Sidebar;
