import React, { useState } from "react";

import Icons from "../Icons";
// import Button from '../Button/Button';
import Container from "../Container/Container";
import AccountButton from "../AccountButton/AccountButton";
import Sidebar from "../Sidebar/Sidebar";

import "./Header.css";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarHandler = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Container>
      <header className="header app__header">
        <nav className="header__nav">
          <Icons.Logo className="logo header__logo" />
          <ul className="header__links">
            <li className="header__link header__link_active">Фильмы</li>
            <li className="header__link">Сохраненные фильмы</li>
          </ul>
        </nav>
        <div className="header__account-menu">
          {/* <Button className="button_type_none">Регистрация</Button>
          <Button className="button_type_green">Войти</Button> */}
          <AccountButton />
        </div>
        <Icons.Burger
          className="header__burger-icon"
          handler={sidebarHandler}
        />
        <Sidebar isOpen={isSidebarOpen} closeHandler={sidebarHandler} />
      </header>
    </Container>
  );
}

export default Header;
