import React, { useContext, useState } from "react";
import { BsCode } from "react-icons/bs";
import { TbTool } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { BiCodeCurly } from "react-icons/bi";
import { ScreenContext } from "../../../context";
import { LanguagesCard } from "../../LanguagesCard";
import { LibrairesCard } from "../../LibrairesCard";
import { ToolsCard } from "../../ToolsCard";
import {
  Container,
  Content,
  Title,
  SkillsContainer,
  SkillBox,
  Skill,
  TextSkill,
} from "./styles";

interface isOpenProps {
  isLanguagesActive: boolean;
  isLibrairesActive: boolean;
  isToolsActive: boolean;
}

export function Skills() {
  const { setIsFocus, windowWidth } = useContext(ScreenContext);

  function handleToggleFocus() {
    setIsFocus({
      isAboutFocus: false,
      isHomeFocus: false,
      isContactFocus: false,
      isProjectsFocus: false,
      isQualificationsFocus: false,
      isSkillsFocus: true,
    });
  }

  const [isOpen, setIsOpen] = useState<isOpenProps>({
    isLanguagesActive: false,
    isLibrairesActive: false,
    isToolsActive: false,
  });

  function handleOpenMenu(id: string) {
    if (id === "languages") {
      setIsOpen({
        isLanguagesActive: !isOpen.isLanguagesActive,
        isLibrairesActive: isOpen.isLibrairesActive,
        isToolsActive: isOpen.isToolsActive,
      });
    }
    if (id === "libraires") {
      setIsOpen({
        isLanguagesActive: isOpen.isLanguagesActive,
        isLibrairesActive: !isOpen.isLibrairesActive,
        isToolsActive: isOpen.isToolsActive,
      });
    }
    if (id === "tools") {
      setIsOpen({
        isLanguagesActive: isOpen.isLanguagesActive,
        isLibrairesActive: isOpen.isLibrairesActive,
        isToolsActive: !isOpen.isToolsActive,
      });
    }
  }

  return (
    <Content id="skills" onMouseOverCapture={() => handleToggleFocus()} onTouchStartCapture={() => handleToggleFocus()}>
      <Container windowWidth={windowWidth}>
        <Title windowWidth={windowWidth}>
          <h1>Skills</h1>
          <h5>My Technical Skills</h5>
        </Title>

        <SkillsContainer windowWidth={windowWidth}>
          <SkillBox>
            <Skill
              onClick={() => handleOpenMenu("languages")}
              isOpen={isOpen.isLanguagesActive}
            >
              <BsCode className="icon" />
              <TextSkill>
                <h1>Languages</h1>
                <h5>Languages that i have picked up over the years</h5>
              </TextSkill>
              <IoIosArrowDown className="languages" />
            </Skill>
            {isOpen.isLanguagesActive ? <LanguagesCard /> : ""}
          </SkillBox>

          <SkillBox>
            <Skill
              onClick={() => handleOpenMenu("libraires")}
              isOpen={isOpen.isLibrairesActive}
            >
              <BiCodeCurly className="icon" />
              <TextSkill>
                <h1>Libraires</h1>
                <h5>Libraries and Frameworks that I prefer to work with</h5>
              </TextSkill>
              <IoIosArrowDown className="libraires" />

            </Skill>
            {isOpen.isLibrairesActive ? <LibrairesCard /> : ""}
          </SkillBox>

          <SkillBox>
            <Skill
              onClick={() => handleOpenMenu("tools")}
              isOpen={isOpen.isToolsActive}
            >
              <TbTool className="icon" />
              <TextSkill>
                <h1>Tools</h1>
                <h5>Tools that I know and use on a daily basis</h5>
              </TextSkill>
              <IoIosArrowDown className="tools" />

            </Skill>
            {isOpen.isToolsActive ? <ToolsCard /> : ""}
          </SkillBox>
        </SkillsContainer>
      </Container>
    </Content>
  );
}
