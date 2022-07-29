import React from "react";
import { Libraires } from "./libraires";
import { Container } from "./styles";

export function LibrairesCard() {
  return (
    <Container>
      <Libraires title="ReactJS" icon="SiReact" />
      <Libraires title="NodeJS" icon="SiNodedotjs" />
      <Libraires title="React Native" icon="TbBrandReactNative" />
      <Libraires title="Styled Components" icon="SiStyledcomponents" />
      <Libraires title="Chakra UI" icon="SiChakraui" />
    </Container>
  );
}
