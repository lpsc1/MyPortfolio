import React, { useContext } from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { BsMouse, BsArrowDown } from "react-icons/bs";
import { ScreenContext } from "../../../context";
import { ButtonBox } from "../../ButtonBox";
import {
  Container,
  SocialCards,
  TextContainer,
  ImgProfile,
  Content,
  Box,
  ScrollDown,
} from "./styles";

export function Home() {
  const { setIsFocus, windowWidth } = useContext(ScreenContext);

  function handleToggleFocus() {
    setIsFocus({
      isAboutFocus: false,
      isHomeFocus: true,
      isContactFocus: false,
      isProjectsFocus: false,
      isQualificationsFocus: false,
      isSkillsFocus: false,
    });
  }
  return (
    <Box id="home" onMouseOver={() => handleToggleFocus()} onTouchStartCapture={() => handleToggleFocus()} >
      <Container windowWidth={windowWidth}>
        <Content windowWidth={windowWidth}>
          <SocialCards windowWidth={windowWidth}>
            <a href="https://www.linkedin.com/in/lpsc1/" target="_blank">
              <SiLinkedin className="icon" />
            </a>
            <a href="https://github.com/lpsc1" target="_blank">
              <SiGithub className="icon" />
            </a>
          </SocialCards>
          <TextContainer windowWidth={windowWidth}>
            <h1>Hi, I'm Lucas</h1>
            <h5>I am a Front-end Developer | JavaScript | React </h5>
            <p style={{ marginBottom: 50 }}>
              Open-Source enthusiast and self learner,
              <br /> believes in the power of community.
            </p>
            {windowWidth <= 1024 ? 
            <img
            src="https://avatars.githubusercontent.com/u/95585022?v=4"
            alt="Foto de Lucas"
            style={{ width: 320, height: 320, borderRadius: 360, marginBottom: 50 }}
            className='img-profile'
            /> : ''}
            <a href="#contact" style={{ textDecoration: "none" }}>
              <ButtonBox title="Contact me" icon="send.png" type="button" />
            </a>
            {windowWidth >= 768 ? <ScrollDown href="#about" className="mouse">
              <BsMouse className="icon"/>
              <p style={{ marginRight: 7 }}>Scroll Down</p>
              <BsArrowDown className="icon"/>
            </ScrollDown> : '' }
            
          </TextContainer>
          <ImgProfile
            src="https://avatars.githubusercontent.com/u/95585022?v=4"
            alt="Foto de Lucas"
            style={{ width: 350, height: 350 }}
            windowWidth={windowWidth}
          ></ImgProfile>
        </Content>
      </Container>
    </Box>
  );
}
