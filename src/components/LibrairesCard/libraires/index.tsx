import React from "react";
import {
  SiReact,
  SiNodedotjs,
  SiStyledcomponents,
  SiChakraui,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaVuejs } from "react-icons/fa";

import { Container } from "./styles";

interface LibrairesProps {
  title: string;
  icon: string;
}

export function Libraires({ title, icon }: LibrairesProps) {
  return (
    <Container>
      {icon === "SiReact" ? (
        <SiReact className="icon" />
      ) : icon === "SiNodedotjs" ? (
        <SiNodedotjs className="icon" />
      ) : icon === "TbBrandReactNative" ? (
        <TbBrandReactNative className="icon" />
      ) : icon === "SiStyledcomponents" ? (
        <SiStyledcomponents className="icon" />
      ) : icon === "SiChakraui" ? (
        <SiChakraui className="icon" />
      ) : icon === "FaVuejs" ? (
        <FaVuejs className="icon" />
      ) : (
        ""
      )}
      <p>{title}</p>
    </Container>
  );
}
