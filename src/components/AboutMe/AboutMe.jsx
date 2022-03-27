import React from "react";

import Title from "../Title/Title";
import Container from "../Container/Container";
import Icons from "../Icons/";
import photo from "../../images/avatar.jpeg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <Container>
      <section className="about-me main__about-me">
        <Title title="Студент" />
        <div className="student about-me__student">
          <div className="student__information">
            <h3 className="student__name">Толя</h3>
            <p className="student__about">
              Начинающий фронтенд-разработчик, 27 лет
            </p>
            <p className="student__description">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <ul className="student__socials">
              <li className="student__socials-item">
                <a className="student__link" href="https://github.com/famovkin">
                  Github
                </a>
              </li>
              <li className="student__socials-item">
                <a className="student__link" href="https://t.me/famovkin">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          <img className="student__photo" src={photo} alt="Толя" />
        </div>
        <div className="portfolio">
          <h3 className="portfolio__title">Портфолио</h3>
          <ul className="portfolio__projects">
            <li className="project__item">
              <a
                href="https://famovkin.github.io/how-to-learn/"
                className="project__link"
                target="_blank"
                rel="noreferrer"
              >
                Статичный сайт
                <Icons.LinkIcon className="project__icon" />
              </a>
            </li>
            <li className="project__item">
              <a
                href="https://famovkin.github.io/russian-travel/"
                className="project__link"
                target="_blank"
                rel="noreferrer"
              >
                Адаптивный сайт
                <Icons.LinkIcon className="project__icon" />
              </a>
            </li>
            <li className="project__item">
              <a
                href="https://mesto.nomoredomains.xyz/"
                className="project__link"
                target="_blank"
                rel="noreferrer"
              >
                Одностраничное приложение
                <Icons.LinkIcon className="project__icon" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Container>
  );
}

export default AboutMe;
