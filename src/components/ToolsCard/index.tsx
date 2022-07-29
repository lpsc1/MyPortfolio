import React from "react";
import { Container } from "./styles";
import { Tools } from "./tools";

export function ToolsCard() {
  return (
    <Container>
      <Tools title="Git" icon="SiGit" />
      <Tools title="GitHub" icon="SiGithub" />
      <Tools title="Figma" icon="SiFigma" />
    </Container>
  );
}
