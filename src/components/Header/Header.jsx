import React, { useState, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";

import Icons from "../Icons";
import Button from "../Button/Button";
import Container from "../Container/Container";
import AccountButton from "../AccountButton/AccountButton";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "../Logo/Logo";
import currentUserContext from "../../context/currentUserContext";
import "./Header.css";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { currentUser, setCurrentUser } = useContext(currentUserContext);

  const sidebarHandler = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    currentUser.name === ""
      ? setIsLoggedIn(false)
      : setIsLoggedIn(true);
    }, [currentUser.name])

  return (
    <Container>
      <header className="header app__header">
        <nav className="header__nav">
          <Link className="header__linked-logo" to="/">
            <Logo className="logo header__logo" />
          </Link>
          <div className={`header__links ${isLoggedIn
            ? ""
            : "header__links_type_hidden"}`}>
            <NavLink
              className="header__link"
              activeClassName="header__link_active"
              to="/movies"
            >
              Фильмы
            </NavLink>
            <NavLink
              className="header__link"
              activeClassName="header__link_active"
              to="/saved-movies"
            >
              Сохраненные фильмы
            </NavLink>
          </div>
        </nav>
        <div className="header__account-menu">
          {isLoggedIn ? (
            <Link className="header__linked-button" to="/profile">
              <AccountButton modifier="button_type_account-hidden" />
            </Link>
          ) : (
            <>
              <Link to="/signup">
                <Button className="button_type_header button_type_white-text">
                  Регистрация
                </Button>
              </Link>
              <Link to="/signin">
                <Button className="button_type_header button_type_green">
                  Войти
                </Button>
              </Link>
            </>
          )}
        </div>
        {isLoggedIn && (
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
