import styled from "styled-components";

interface Props {
  windowWidth: number;
}

export const Box = styled.section`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div<Props>`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  /* :hover {
    transition: 0.5s;
    transform: ${({ windowWidth }) => windowWidth < 1024 ? "" : "scale(1.03)"};
  } */
`;
export const Title = styled.head<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  color: var(--text);
  font-size: ${({ windowWidth }) => (windowWidth < 1024 ? "16px" : "25px")};
  h5 {
    font-size: 13px;
  }
`;
export const Content = styled.main<Props>`
  display: flex;
  flex-direction: ${({ windowWidth }) =>
    windowWidth < 1024 ? "column" : "row"};
  gap: ${({ windowWidth }) => (windowWidth < 1024 ? "3rem" : "6rem")};
  justify-content: center;
  align-items: center;
`;
export const Img = styled.img`
max-width: 500px;
max-height: 400px;
  width: auto;
  height: auto;
 
  border-radius: 10px;
  //:hover {
  //  transition: all 2s;
  //  transform: scale(1.1);
  //}
`;
export const Description = styled.div<Props>`
  display: flex;
  flex-direction: column;
  color: var(--text);
`;
