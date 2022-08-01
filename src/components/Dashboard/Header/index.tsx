import React, { useContext } from "react";
import { ScreenContext } from "../../../context";
import { Container, Logo, Nav, LinkNav } from "./styles";

export function Header() {
  const { isFocus, setIsFocus, windowWidth } = useContext(ScreenContext);
  return (
    <Container windowWidth={windowWidth}>
      {windowWidth < 1024 ? "" : <Logo>Lucas</Logo>}
      {windowWidth >= 524 ? (
        <Nav windowWidth={windowWidth}>
          <a
            onClick={() =>
              setIsFocus({
                isAboutFocus: false,
                isHomeFocus: true,
                isContactFocus: false,
                isProjectsFocus: false,
                isQualificationsFocus: false,
                isSkillsFocus: false,
              })
            }
            href="#home"
          >
            {" "}
            <LinkNav className={isFocus.isHomeFocus ? "home-active" : "home"}>
              Home
            </LinkNav>
          </a>
          <a
            onClick={() =>
              setIsFocus({
                isAboutFocus: true,
                isHomeFocus: false,
                isContactFocus: false,
                isProjectsFocus: false,
                isQualificationsFocus: false,
                isSkillsFocus: false,
              })
            }
            href="#about"
          >
            {" "}
            <LinkNav
              className={isFocus.isAboutFocus ? "about-active" : "about"}
            >
              About
            </LinkNav>
          </a>
          <a
            onClick={() =>
              setIsFocus({
                isAboutFocus: false,
                isHomeFocus: false,
                isContactFocus: false,
                isProjectsFocus: false,
                isQualificationsFocus: false,
                isSkillsFocus: true,
              })
            }
            href="#skills"
          >
            {" "}
            <LinkNav
              className={isFocus.isSkillsFocus ? "skills-active" : "skills"}
            >
              Skills
            </LinkNav>
          </a>
          <a
            onClick={() =>
              setIsFocus({
                isAboutFocus: false,
                isHomeFocus: false,
                isContactFocus: false,
                isProjectsFocus: false,
                isQualificationsFocus: true,
                isSkillsFocus: false,
              })
            }
            href="#qualifications"
          >
            {" "}
            <LinkNav
              className={
                isFocus.isQualificationsFocus
                  ? "qualifications-active"
                  : "qualifications"
              }
            >
              Qualifications
            </LinkNav>
          </a>
          <a
            onClick={() =>
              setIsFocus({
                isAboutFocus: false,
                isHomeFocus: false,
                isContactFocus: false,
                isProjectsFocus: true,
                isQualificationsFocus: false,
                isSkillsFocus: false,
              })
            }
            href="#projects"
          >
            {" "}
            <LinkNav
              className={
                isFocus.isProjectsFocus ? "projects-active" : "projects"
              }
            >
              Projects
            </LinkNav>
          </a>
          <a
            onClick={() =>
              setIsFocus({
                isAboutFocus: false,
                isHomeFocus: false,
                isContactFocus: true,
                isProjectsFocus: false,
                isQualificationsFocus: false,
                isSkillsFocus: false,
              })
            }
            href="#contact"
          >
            {" "}
            <LinkNav
              className={isFocus.isContactFocus ? "contact-active" : "contact"}
            >
              Contact Me
            </LinkNav>
          </a>
        </Nav>
      ) : (
        <>
          <a href="#home">
            {" "}
            <LinkNav className="home">Home</LinkNav>
          </a>
          <a href="#contact">
            {" "}
            <LinkNav className="contact">Contact Me</LinkNav>
          </a>
        </>
      )}
    </Container>
  );
}
