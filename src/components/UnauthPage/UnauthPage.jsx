import React from "react";

import Logo from "../Logo/Logo";
import "./UnauthPage.css";

function UnauthPage({ title, children, text, link, linkText }) {
  return (
    <section className="unauth-page">
      <div className="unauth-page__container">
        <Logo className="logo unauth-page__logo" />
        <h2 className="unauth-page__title">{title}</h2>
        {children}
        <p className="unauth-page__text">
          {text}{" "}
          <a className="unauth-page__link" href={link}>
            {linkText}
          </a>
        </p>
      </div>
    </section>
  );
}

export default UnauthPage;
