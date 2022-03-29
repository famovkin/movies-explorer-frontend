import React, { useState } from "react";

import Icons from "../Icons";
import Button from "../Button/Button";
import Container from "../Container/Container";
import AccountButton from "../AccountButton/AccountButton";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "../Logo/Logo";

import "./Header.css";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isAuth = false; // для смены кнопок

  const sidebarHandler = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Container>
      <header className="header app__header">
        <nav className="header__nav">
          <Logo className="logo header__logo" />
          <ul className="header__links">
            <li className="header__link header__link_active">Фильмы</li>
            <li className="header__link">Сохраненные фильмы</li>
          </ul>
        </nav>
        <div className="header__account-menu">
          {isAuth ? (
            <AccountButton />
          ) : (
            <>
              <Button className="button_type_header button_type_white-text">
                Регистрация
              </Button>
              <Button className="button_type_header button_type_green">
                Войти
              </Button>
            </>
          )}
        </div>
        {isAuth && (
          <Icons.Burger
            className="header__burger-icon"
            handler={sidebarHandler}
          />
        )}
        <Sidebar isOpen={isSidebarOpen} closeHandler={sidebarHandler} />
      </header>
    </Container>
  );
}

export default Header;
