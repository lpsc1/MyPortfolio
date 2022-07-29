import React, { useContext } from "react";
import { ScreenContext } from "../../../context";
import { ButtonBox } from "../../ButtonBox";
import { Container, Title, Content, Description, Img, Box } from "./styles";

export function About() {
  const { setIsFocus, windowWidth } = useContext(ScreenContext);

  function handleToggleFocus() {
    setIsFocus({
      isAboutFocus: true,
      isHomeFocus: false,
      isContactFocus: false,
      isProjectsFocus: false,
      isQualificationsFocus: false,
      isSkillsFocus: false,
    });
  }

  return (
    <Box id="about" onMouseOverCapture={() => handleToggleFocus()} onTouchStartCapture={() => handleToggleFocus()}>
      <Container windowWidth={windowWidth}>
        <Title windowWidth={windowWidth}>
          <h1> About Me</h1>
          <h5>My introduction</h5>
        </Title>
        <Content windowWidth={windowWidth}>
          <Img
            src="profile.png"
            alt="Foto de Lucas"
          ></Img>
          <Description windowWidth={windowWidth}>
            <p style={{ marginBottom: 30 }}>
              Hi! 👋 I'm Lucas, a 22-year-old.
              <br />
              Fourth-year engineering student, studying
              <br />
               control and automation engineering.
              <br />
              I am a passionate self-learner,
              <br />
              open source enthusiast, exploring and
              <br />
              building projects👨‍💻 using various
              <br />
              technologies. I am a frontend web
              <br />
              developer well versed in HTML, CSS, 
              <br />
              TypeScript, JavaScript and stand at a 
              <br />
              beginner-intermediate level of React.
            </p>
          </Description>
        </Content>
      </Container>
    </Box>
  );
}
