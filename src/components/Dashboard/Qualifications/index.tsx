import React, { useContext, useState } from "react";
import { GoMortarBoard } from "react-icons/go";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { ScreenContext } from "../../../context";
import { EducationCard } from "./EducationCard";
import { Container, Title, Menu, Mode, Content } from "./styles";
import { WorkCard } from "./Work";

interface ModesProps {
  isEducation: boolean;
  isWork: boolean;
}

export function Qualifications() {
  const { setIsFocus, windowWidth } = useContext(ScreenContext);

  function handleToggleFocus() {
    setIsFocus({
      isAboutFocus: false,
      isHomeFocus: false,
      isContactFocus: false,
      isProjectsFocus: false,
      isQualificationsFocus: true,
      isSkillsFocus: false,
    });
  }
  const [isActiveMode, setisActiveMode] = useState<ModesProps>({
    isEducation: true,
    isWork: false,
  });

  function handleToggleMode(id: string) {
    if (id === "education") {
      setisActiveMode({
        isEducation: true,
        isWork: false,
      });
    } else {
      setisActiveMode({
        isEducation: false,
        isWork: true,
      });
    }
  }

  return (
    <Content id="qualifications" onMouseOverCapture={() => handleToggleFocus()} onTouchStartCapture={() => handleToggleFocus()}>
      <Container windowWidth={windowWidth}>
        <Title windowWidth={windowWidth}>
          <h1>Qualifications</h1>
          <h5>My Educational Qualification & Work Experience</h5>
        </Title>
        <Menu>
          <Mode
            onClick={() => handleToggleMode("education")}
            isActive={isActiveMode.isEducation}
          >
            <GoMortarBoard className="icon"/>
            <p>Education</p>
          </Mode>
          <Mode
            onClick={() => handleToggleMode("work")}
            isActive={isActiveMode.isWork}
          >
            <BiBriefcaseAlt2 className="icon"/>
            <p>Work</p>
          </Mode>
        </Menu>
        <Content>
          {isActiveMode.isEducation ? <EducationCard /> : <WorkCard />}
        </Content>
      </Container>
    </Content>
  );
}
