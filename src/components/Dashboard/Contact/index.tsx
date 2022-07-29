import React, { useContext, useState } from "react";
import { ScreenContext } from "../../../context";
import {AiOutlineSend} from 'react-icons/ai'
import { ButtonBox } from "../../ButtonBox";
import { Box } from "../About/styles";
import { SocialCard } from "./socialCard";
import {
  Container,
  CardsContainer,
  FormContainer,
  Content,
  Forms,
  Title,
  ButtonSubmit,
} from "./styles";

interface isCompleteProps {
  isNameComplete: boolean;
  isEmailComplete: boolean;
  isSubjectComplete: boolean;
  isMessageComplete: boolean;
}

export function ContactMe() {
  const { setIsFocus, windowWidth } = useContext(ScreenContext);

  function handleToggleFocus() {
    setIsFocus({
      isAboutFocus: false,
      isHomeFocus: false,
      isContactFocus: true,
      isProjectsFocus: false,
      isQualificationsFocus: false,
      isSkillsFocus: false,
    });
  }
  const [isFocusContent, setIsFocusContent] = useState({
    isNameFocus: false,
    isEmailFocus: false,
    isSubjectFocus: false,
    isMessageFocus: false,
  });
  const [isComplete, setIsComplete] = useState<isCompleteProps>({
    isNameComplete: false,
    isEmailComplete: false,
    isSubjectComplete: false,
    isMessageComplete: false,
  });

  function handleChangeInput(params: string, id: string) {
    if (params.length > 0 && id === "name") {
      setIsComplete({
        isNameComplete: true,
        isEmailComplete: isComplete.isEmailComplete,
        isSubjectComplete: isComplete.isSubjectComplete,
        isMessageComplete: isComplete.isMessageComplete,
      });
    }
    if (params.length <= 0 && id === "name") {
      setIsComplete({
        isNameComplete: false,
        isEmailComplete: isComplete.isEmailComplete,
        isSubjectComplete: isComplete.isSubjectComplete,
        isMessageComplete: isComplete.isMessageComplete,
      });
    }
    if (params.length > 0 && id === "email") {
      setIsComplete({
        isNameComplete: isComplete.isNameComplete,
        isEmailComplete: true,
        isSubjectComplete: isComplete.isSubjectComplete,
        isMessageComplete: isComplete.isMessageComplete,
      });
    }
    if (params.length <= 0 && id === "email") {
      setIsComplete({
        isNameComplete: isComplete.isNameComplete,
        isEmailComplete: false,
        isSubjectComplete: isComplete.isSubjectComplete,
        isMessageComplete: isComplete.isMessageComplete,
      });
    }
    if (params.length > 0 && id === "subject") {
      setIsComplete({
        isNameComplete: isComplete.isNameComplete,
        isEmailComplete: isComplete.isEmailComplete,
        isSubjectComplete: true,
        isMessageComplete: isComplete.isMessageComplete,
      });
    }
    if (params.length <= 0 && id === "subject") {
      setIsComplete({
        isNameComplete: isComplete.isNameComplete,
        isEmailComplete: isComplete.isEmailComplete,
        isSubjectComplete: false,
        isMessageComplete: isComplete.isMessageComplete,
      });
    }
    if (params.length > 0 && id === "message") {
      setIsComplete({
        isNameComplete: isComplete.isNameComplete,
        isEmailComplete: isComplete.isEmailComplete,
        isSubjectComplete: isComplete.isSubjectComplete,
        isMessageComplete: true,
      });
    }
    if (params.length <= 0 && id === "message") {
      setIsComplete({
        isNameComplete: isComplete.isNameComplete,
        isEmailComplete: isComplete.isEmailComplete,
        isSubjectComplete: isComplete.isSubjectComplete,
        isMessageComplete: false,
      });
    }
  }
  return (
    <Box
      id="contact"
      onMouseOverCapture={() => handleToggleFocus()}
      onTouchStartCapture={() => handleToggleFocus()}
    >
      <Container windowWidth={windowWidth}>
        <Title windowWidth={windowWidth}>
          <h1>Contact Me</h1>
          <h5>Want to connect? My inbox is always open!</h5>
        </Title>
        <Content windowWidth={windowWidth}>
          <CardsContainer>
            <SocialCard
              icon="FiMail"
              altIcon="Imagem de carta"
              title="Email"
              subTitle="lucascor_rtb@hotmail.com"
              link="mailto:lucascor_rtb@hotmail.com"
            />
            <SocialCard
              icon="SiLinkedin"
              altIcon="Imagem ícone Linkedin"
              title="Linkedin"
              subTitle="Lucas Carvalho"
              link="https://www.linkedin.com/in/lpsc1/"
            />
            <SocialCard
              icon="GoLocation"
              altIcon="Imagem ícone localização"
              title="Location"
              subTitle="Cuiabá, Brasil"
              link="https://www.google.com.br/maps/place/Cuiab%C3%A1+-+MT/@-15.6001513,-56.0632877,10.25z/data=!4m5!3m4!1s0x939d9581e0c9c4a1:0xa5fce0cf4ef61aae!8m2!3d-15.5954142!4d-56.0925956"
            />
          </CardsContainer>
          <FormContainer
            name="contact me"
            method="POST"
            data-netlify="true"
            windowWidth={windowWidth}
            isComplete={isComplete}
            isFocusContent={isFocusContent}
          >
            <input type="hidden" name="message-to-me" value="contact me" />
            <Forms className="nameInput">
              <label>
                Name
                <br />
                <input
                  required
                  name="name"
                  type="text"
                  className="name"
                  onFocus={() =>
                    setIsFocusContent({
                      isNameFocus: true,
                      isEmailFocus: false,
                      isSubjectFocus: false,
                      isMessageFocus: false,
                    })
                  }
                  onBlur={() =>
                    setIsFocusContent({
                      isNameFocus: false,
                      isEmailFocus: false,
                      isSubjectFocus: false,
                      isMessageFocus: false,
                    })
                  }
                  onChange={(value) =>
                    handleChangeInput(value.target.value, "name")
                  }
                />
              </label>
            </Forms>
            <Forms className="emailInput">
              <label>
                Email<br />
                <input
                  required
                  name="email"
                  type="email"
                  className="email"
                  onFocus={() =>
                    setIsFocusContent({
                      isNameFocus: false,
                      isEmailFocus: true,
                      isSubjectFocus: false,
                      isMessageFocus: false,
                    })
                  }
                  onBlur={() =>
                    setIsFocusContent({
                      isNameFocus: false,
                      isEmailFocus: false,
                      isSubjectFocus: false,
                      isMessageFocus: false,
                    })
                  }
                  onChange={(value) =>
                    handleChangeInput(value.target.value, "email")
                  }
                />
              </label>
            </Forms>
            <Forms className="subjectInput">
              <label>
                Subject<br />
                <input
                  required
                  name="subject"
                  type="text"
                  className="subjectInput"
                  onFocus={() =>
                    setIsFocusContent({
                      isNameFocus: false,
                      isEmailFocus: false,
                      isSubjectFocus: true,
                      isMessageFocus: false,
                    })
                  }
                  onBlur={() =>
                    setIsFocusContent({
                      isNameFocus: false,
                      isEmailFocus: false,
                      isSubjectFocus: false,
                      isMessageFocus: false,
                    })
                  }
                  onChange={(value) =>
                    handleChangeInput(value.target.value, "subject")
                  }
                />
              </label>
            </Forms>
            <Forms className="messageInput">
              <label>
                Message<br />
                <textarea
                  required
                  name="message"
                  minLength={1}
                  className="textarea"
                  onFocus={() =>
                    setIsFocusContent({
                      isNameFocus: false,
                      isEmailFocus: false,
                      isSubjectFocus: false,
                      isMessageFocus: true,
                    })
                  }
                  onBlur={() =>
                    setIsFocusContent({
                      isNameFocus: false,
                      isEmailFocus: false,
                      isSubjectFocus: false,
                      isMessageFocus: false,
                    })
                  }
                  onChange={(value) =>
                    handleChangeInput(value.target.value, "message")
                  }
                />
              </label>
            </Forms>
            <ButtonSubmit type="submit">Submit <AiOutlineSend className="icon"/></ButtonSubmit>
          </FormContainer>
        </Content>
      </Container>
    </Box>
  );
}
