import React from "react";

import Logo from "../Logo/Logo";
import "./UnauthPage.css";

function UnauthPage({ title, children }) {
  return (
    <section className="unauth-page">
      <div className="unauth-page__container">
        <Logo className="logo unauth-page__logo" />
        <h2 className="unauth-page__title">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default UnauthPage;
