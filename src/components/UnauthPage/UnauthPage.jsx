import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import "./UnauthPage.css";

function UnauthPage({ title, children, text, link, linkText }) {
  return (
    <section className="unauth-page">
      <div className="unauth-page__container">
        <Link to="">
          <Logo className="logo unauth-page__logo" />
        </Link>
        <h2 className="unauth-page__title">{title}</h2>
        {children}
        <p className="unauth-page__text">
          {text}{" "}
          <Link className="unauth-page__link" to={link}>
            {linkText}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default UnauthPage;
