import React from "react";

import Container from "../Container/Container";
import TextCard from "../TextCard/TextCard";
import Roadmap from "../Roadmap/Roadmap";
import Title from "../Title/Title";
import { diplomaTextCards } from "../../utils/constants";
import "./AboutProject.css";

function AboutProject() {
  return (
    <Container modifier="container_type_landing">
      <section className="about" id="about">
        <Title title="О проекте" />
        <div className="about__cards">
          {diplomaTextCards.map((card) => (
            <TextCard key={card.id} {...card} />
          ))}
        </div>
        <Roadmap />
      </section>
    </Container>
  );
}

export default AboutProject;
