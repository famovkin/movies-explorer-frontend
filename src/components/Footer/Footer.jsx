import React from "react";

import Link from "../Link/Link";
import Container from "../Container/Container";
import "./Footer.css";

const links = [
  {
    id: 1,
    title: "Яндекс.Практикум",
    url: "https://practicum.yandex.ru/",
  },
  {
    id: 2,
    title: "Github",
    url: "https://github.com/famovkin",
  },
  {
    id: 3,
    title: "Telegram",
    url: "https://t.me/famovkin",
  },
];

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__information">
          <p className="footer__year">&#169; 2022</p>
          <ul className="footer__links">
            {links.map((link) => (
              <Link key={link.id} {...link} />
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
