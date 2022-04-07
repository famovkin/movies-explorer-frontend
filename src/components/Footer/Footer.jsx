import React from "react";

import Link from "../Link/Link";
import Container from "../Container/Container";
import { footerLinks } from "../../utils/constants";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__information">
          <p className="footer__year">&#169; 2022</p>
          <ul className="footer__links">
            {footerLinks.map((link) => (
              <Link key={link.id} {...link} />
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
