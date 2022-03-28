import React from "react";

import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__content">
        <div className="not-found__text">
          <p className="not-found__error">404</p>
          <h2 className="not-found__title">Страница не найдена</h2>
        </div>
        <a className="not-found__back" href="1">
          Назад
        </a>
      </div>
    </section>
  );
}

export default NotFound;
