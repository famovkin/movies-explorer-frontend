import React from "react";

import Container from "../Container/Container";
import Title from "../Title/Title";
import TechIcon from "../TechIcon/TechIcon";
import "./Techs.css";

const stack = ["HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"];

function Techs() {
  return (
    <section className="techs" id="techs">
      <Container modifier="container_type_landing">
        <Title title="Технологии" />
        <div className="techs__texts">
          <h3 className="techs__title">7 технологий</h3>
          <p className="techs__description">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className="techs__list">
          {stack.map((tech) => (
            <TechIcon key={tech} title={tech} />
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Techs;
