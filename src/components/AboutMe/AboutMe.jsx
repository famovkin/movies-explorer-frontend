import React from "react";

import Title from "../Title/Title";
import Container from "../Container/Container";
import Link from "../Link/Link";
import Project from "../Project/Project";
import photo from "../../images/avatar.jpeg";
import { socialLinks, projects } from "../../utils/constants";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <Container modifier="container_type_landing">
      <section className="about-me main__about-me" id="student">
        <Title title="Студент" />
        <div className="student about-me__student">
          <div className="student__information">
            <h3 className="student__name">Толя</h3>
            <p className="student__about">
              Начинающий фронтенд-разработчик, 27 лет
            </p>
            <p className="student__description">
              Я живу в Гусь-Хрустальном, закончил факультет информационной
              безопасности в РосНОУ. С 2021 года начал я изучать веб-разработку.
              Мне нравится писать код, создавать удобные приложения и постоянно
              узучать что-то новое для себя. В свободное время я рисую портреты
              и ещё увлекаюсь моддингом клавиатур.
            </p>
            <ul className="student__socials">
              {socialLinks.map((link) => (
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
};

export default AboutMe;
