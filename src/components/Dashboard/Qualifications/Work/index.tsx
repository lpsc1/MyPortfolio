import React, { useContext } from "react";
import { ScreenContext } from "../../../../context";
import { Container, Item, Date, TimeLine } from "./styles";

export function WorkCard() {
  const { windowWidth } = useContext(ScreenContext);

  return (
    <Container>
      <Item  className="item-top">
        <h1>
          Front-end JR
          <br />
          Developer
        </h1>
        <h5>
          HTI,
          <br />
          Cuiabá-MT
        </h5>
        <Date>
          <img src="calendario.png" alt="Calendário" />
          <p>
            Oct 2021 - <br />
            Jul 2022
          </p>
        </Date>
      </Item>

      <TimeLine>
      </TimeLine>
      <Item className="item-bottom">
        <h1>
          Front-end
          <br />
          Internship
        </h1>
        <h5>
          Primepass,
          <br />
          Cuiabá-MT
        </h5>
        <Date>
          <img src="calendario.png" alt="Calendário" />
          <p>
            May 2021 -<br /> Oct 2021
          </p>
        </Date>
      </Item>
    </Container>
  );
}
