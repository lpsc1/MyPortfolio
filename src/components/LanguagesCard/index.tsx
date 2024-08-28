import React from "react";
import { Languages } from "./languages/languages";
import { Container } from "./styles";

export function LanguagesCard() {
  return (
    <Container>
      <Languages title="JavaScript" icon="SiJavascript" />
      <Languages title="TypeScript" icon="SiTypescript" />
      <Languages title="HTML" icon="SiHtml5" />
      <Languages title="CSS" icon="SiCss3" />
    </Container>
  );
}
