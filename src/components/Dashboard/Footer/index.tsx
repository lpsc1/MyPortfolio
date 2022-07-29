import React, { useContext } from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { ScreenContext } from "../../../context";
import { Container, Logo, Nav, NavLink, NavSvg } from "./styles";

export function Footer() {
  const { windowWidth } = useContext(ScreenContext);
  return (
    <Container windowWidth={windowWidth}>
      <Logo>
        <h2>Lucas Carvalho</h2>
        <p>Frontend Developer</p>
      </Logo>
      {windowWidth > 680 ? 
      <>
      <Nav>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact Me</NavLink>
      </Nav> 
      <Nav>
      <NavSvg href="https://www.linkedin.com/in/lpsc1/" target="_blank">
        {" "}
        <SiLinkedin className="icon"/>
      </NavSvg>
      <NavSvg href="https://github.com/lpsc1" target="_blank">
        {" "}
        <SiGithub className="icon"/>
      </NavSvg>
    </Nav></>
      :
      ''
      }
      
      
    </Container>
  );
}
