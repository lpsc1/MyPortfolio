import React, { useContext } from "react";
import { ScreenContext } from "../../../../context";
import { Container, Item, Date, TimeLine } from "./styles";

export function EducationCard() {
  const { windowWidth } = useContext(ScreenContext);
  return (
    <Container>
      <Item
        
        className="item-top"
      >
        <h1>
          Control and
          <br />
          Automation
          <br />
          Engineering
        </h1>
        <h5>
          UFMT,
          <br />
          Cuiabá-MT
        </h5>
        <Date>
          <img src="calendario.png" alt="Calendário" />
          <p>2018 - Present</p>
        </Date>
      </Item>

      <TimeLine windowWidth={windowWidth}></TimeLine>
      <Item
        className="item-bottom"
      >
        <h1>High School</h1>
        <h5>
          Colégio Master,
          <br />
          Cuiabá-MT
        </h5>
        <Date>
          <img src="calendario.png" alt="Calendário" />
          <p>2017</p>
        </Date>
      </Item>
    </Container>
  );
}
