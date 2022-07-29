import styled from "styled-components";

interface Props {
  windowWidth: number;
}

export const Box = styled.section`
  display: flex;
`;
export const Container = styled.div<Props>`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 11rem;
  margin-bottom: 1rem;
  :hover {
    transition: 0.5s;
    transform: ${({ windowWidth }) => windowWidth < 1024 ? "" : "scale(1.03)"};
  }
  border: 1px solid var(--primary);
`;
export const Content = styled.main<Props>`
 width: 100%;
  display: flex;
  flex-direction: ${({ windowWidth }) => (windowWidth <= 1024 ? "column" : "row")};
  justify-content: center;
  align-items: center;
  gap: ${({ windowWidth }) => (windowWidth >= 1024 && windowWidth <= 1140 ? "2rem" : windowWidth > 1140 ? "5rem" : '2rem')};
 
`;
export const SocialCards = styled.div<Props>`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: ${({ windowWidth }) => (windowWidth <= 1024 ? "row" : "column")};
  gap: 1rem;
  .icon {
    width: 40px;
    height: 40px;
    color: var(--secundary);
    :hover {
      transition: 0.3s;
      filter: opacity(0.7);
      transform: scale(1.1, 1.1);
    }
  }
`;
export const TextContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  color: var(--text);
  justify-content: center;
  align-items: ${({ windowWidth }) => (windowWidth <= 1024 ? "center" : "flex-start")};
  //margin-right: 30px;
  font-size: ${({ windowWidth }) => (windowWidth < 1024 ? "16px" : "25px")};
  //.mouse{
  // :hover{
  //    transition: 1s;
  //    transform:translateY(15px);
  // }
  // }
`;
export const Button = styled.button`
  align-items: center;
  display: flex;
  border: none;
  background: var(--secundary);
  color: var(--primary);
  padding: 1rem;
  border-radius: 0.5rem;
  :hover {
    transition: 0.15s;
    transform: scale(1.05);
    transform-style: preserv;
  }
`;
export const Img = styled.img`
  :hover {
    transition: 0.3s;
    filter: opacity(0.7);
    transform: scale(1.1, 1.1);
  }
`;
export const ImgProfile = styled.img<Props>`
  display: ${({ windowWidth }) => (windowWidth <= 1024 ? "none" : "")};;
  border-radius: 175px;

  :hover {
    transition: 1s;
    transform: scale(1.1);
  }
`;
export const ScrollDown = styled.a`
  margin-top: 5rem;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background: var(--primary);
  cursor: pointer;
  color: var(--secundary);
  text-decoration: none;
  font-size: 20px;
  :hover {
    transition: 1s;
    text-transform: capitalize;
    transform: translateY(10px);
  }
  .icon {
    width: 20px;
    height: 20px;
    color: var(--secundary);
  }
  //animation: wobble 1s ease-in-out alternate infinite;

  //@keyframes wobble {
  //from {
  // transform:translateY(0px);
  // }
  //to{
  // transform:translateY(10px);
  // }
  //}
`;
