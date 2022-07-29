import styled from "styled-components";

interface Props {
  isOpen?: boolean;
  windowWidth?: number,
}

export const Container = styled.section<Props>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: var(--text); 
  margin-top: 8rem;
  :hover {
    transition: 0.5s;
    transform: ${({ windowWidth }) =>(Number(windowWidth) < 1024 ? "" : "scale(1.03)")};
  }
`;
export const Title = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${({ windowWidth }) => (Number(windowWidth) <= 1024 ? "16px" : "25px")};
  h5 {
    font-size: 15px;
  }
`;
export const SkillsContainer = styled.div<Props>`
  display: grid;
  width: 70%;
  align-self: center;
  margin-top: 7vh;
  grid-template-columns: ${({ windowWidth }) => (Number(windowWidth) <= 1024 ? "1fr" : "1fr 1fr")};;
  grid-row-gap: 10vh;
`;
export const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
`;
export const Skill = styled.button<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 3vh;
  border: none;
  color: var(--text);
  background-color: var(--primary);
  .icon {
    width: 35px;
    height: 35px;
    color: var(--secundary);
    margin-right: 0.8rem;
  }
  :hover {
    transform: scale(1.03);
  }
  .libraires {
    width: 20px;
    height: 20px;
    margin-left: 1rem;
    color: var(--secundary);
    transition: 0.7s;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "")};
  }
  .languages {
    width: 20px;
    height: 20px;
    margin-left: 1rem;
    color: var(--secundary);
    transition: 0.7s;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "")};
  }
  .tools {
    width: 20px;
    height: 20px;
    margin-left: 1rem;
    color: var(--secundary);
    transition: 0.7s;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "")};
  }
`;
export const TextSkill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const Content = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
