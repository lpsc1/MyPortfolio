import styled from "styled-components";

interface Props {
  isComplete: {
    isNameComplete: boolean;
    isEmailComplete: boolean;
    isSubjectComplete: boolean;
    isMessageComplete: boolean;
  };
  isFocusContent: {
    isNameFocus: boolean;
    isEmailFocus: boolean;
    isSubjectFocus: boolean;
    isMessageFocus: boolean;
  };
  windowWidth: number;
}

interface WindowProps {
  windowWidth: number;
}
export const Container = styled.section<WindowProps>`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  justify-content: center;
  align-items: center;
  :hover {
    transition: 0.5s;
    transform: ${({ windowWidth }) => windowWidth < 1024 ? "" : "scale(1.03)"};
  }
`;
export const Title = styled.head<WindowProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  color: var(--text);
  font-size: ${({ windowWidth }) => windowWidth < 1024 ? "16px" : "25px"};
  h5 {
    font-size: 13px;
  }
`;
export const CardsContainer = styled.aside`
  display: flex;
  width: max-content;
  flex-direction: column;
  align-items: flex-start;
  gap: 4vh;
  margin-bottom: 2rem;
`;

export const FormContainer = styled.form<Props>`
  display: grid;
  gap: 1rem;
  grid-template-columns: ${({ windowWidth }) => windowWidth < 820 ? "" : "1fr 2fr"};
  .nameInput {
    border-color: ${({ isComplete, isFocusContent }) =>
      isFocusContent.isNameFocus
        ? isComplete.isNameComplete
          ? "#7DCE13"
          : "#F90716"
        : ""};
    grid-column-start: ${({ windowWidth }) => windowWidth < 820 ? "1" : "1"};
    grid-column-end: ${({ windowWidth }) => windowWidth < 820 ? "3" : "2"};
  }
  .emailInput {
    border-color: ${({ isComplete, isFocusContent }) =>
      isFocusContent.isEmailFocus
        ? isComplete.isEmailComplete
          ? "#7DCE13"
          : "#F90716"
        : ""};
    grid-column-start: ${({ windowWidth }) => windowWidth < 820 ? "1" : "2"};
    grid-column-end: ${({ windowWidth }) => windowWidth < 820 ? "3" : "3"};
  }

  .subjectInput {
    border-color: ${({ isComplete, isFocusContent }) =>
      isFocusContent.isSubjectFocus
        ? isComplete.isSubjectComplete
          ? "#7DCE13"
          : "#F90716"
        : ""};
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .messageInput {
    border-color: ${({ isComplete, isFocusContent }) =>
      isFocusContent.isMessageFocus
        ? isComplete.isMessageComplete
          ? "#7DCE13"
          : "#F90716"
        : ""};
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;
export const Content = styled.div<WindowProps>`
  display: flex;
  gap: 4rem;
  flex-direction: ${({ windowWidth }) => windowWidth <= 1024 ? "column" : "row"};
  justify-content: center;
  align-items: center;
`;
export const Forms = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 2px solid var(--secundary);
  border-radius: 8px;
  color: var(--text);
  .name {
    width: 100%;
    border: none;
    color: gray;
    background-color: var(--primary);
    :focus {
      outline: 0;
    }
  }
  .email {
    width: 100%;
    border: none;
    color: gray;
    :focus {
      outline: 0;
    }
    background-color: var(--primary);
  }
  .subjectInput {
    width: 100%;
    border: none;
    color: gray;
    background-color: var(--primary);
    :focus {
      outline: 0;
    }
  }
  .textarea {
    width: 100%;
    border: none;
    color: gray;
    background-color: var(--primary);
    :focus {
      outline: 0;
    }
    resize: vertical;
  }
`;
