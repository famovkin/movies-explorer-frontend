import React from "react";

import Title from "../Title/Title";
import Container from "../Container/Container";
import Link from "../Link/Link";
import Project from "../Project/Project";
import photo from "../../images/avatar.jpeg";
import "./AboutMe.css";

function AboutMe() {
  const links = [
    {
      id: 1,
      title: "Github",
      url: "https://github.com/famovkin",
      modifier: "medium",
    },
    {
      id: 2,
      title: "Telegram",
      url: "https://t.me/famovkin",
      modifier: "medium",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Статичный сайт",
      url: "https://famovkin.github.io/how-to-learn/",
    },
    {
      id: 2,
      title: "Адаптивный сайт",
      url: "https://famovkin.github.io/russian-travel/",
    },
    {
      id: 3,
      title: "Одностраничное приложение",
      url: "https://mesto.nomoredomains.xyz/",
    },
  ];

  return (
    <Container modifier="container_type_landing">
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
              {links.map((link) => (
                <Link key={link.id} {...link} />
              ))}
            </ul>
          </div>
          <img className="student__photo" src={photo} alt="Толя" />
        </div>
        <div className="portfolio">
          <h3 className="portfolio__title">Портфолио</h3>
          <ul className="portfolio__projects">
            {projects.map((project) => (
              <Project key={project.id} {...project} />
            ))}
          </ul>
        </div>
      </section>
    </Container>
  );
}

export default AboutMe;