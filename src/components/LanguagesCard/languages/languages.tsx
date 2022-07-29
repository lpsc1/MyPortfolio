import React from "react";
import { SiJavascript, SiTypescript, SiHtml5, SiCss3 } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { Container } from "./styleLanguage";

interface LanguagesProps {
  title: string;
  icon: string;
}

export function Languages({ title, icon }: LanguagesProps) {
  return (
    <Container>
      {icon === "SiJavascript" ? (
        <SiJavascript className="icon" />
      ) : icon === "SiTypescript" ? (
        <SiTypescript className="icon" />
      ) : icon === "SiHtml5" ? (
        <SiHtml5 className="icon" />
      ) : icon === "SiCss3" ? (
        <SiCss3 className="icon" />
      ) : icon === "DiSass" ? (
        <DiSass className="icon" />
      ) : (
        ""
      )}
      <p>{title}</p>
    </Container>
  );
}
