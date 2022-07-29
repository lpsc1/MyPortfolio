import React from "react";
import {SiGit, SiGithub, SiFigma } from "react-icons/si";

import { Container } from "./styles";

interface LibrairesProps {
  title: string;
  icon: string;
}

export function Tools({ title, icon }: LibrairesProps) {
  return (
    <Container>
      {icon === "SiGit" ? (
        <SiGit className="icon" />
      ) : icon === "SiGithub" ? (
        <SiGithub className="icon" />
      ) : icon === "SiFigma" ? (
        <SiFigma className="icon" />
      ) : (
        ""
      )}
      <p>{title}</p>
    </Container>
  );
}
