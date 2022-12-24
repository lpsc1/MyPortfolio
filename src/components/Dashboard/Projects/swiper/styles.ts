import styled from "styled-components";

interface Props {
  windowWidth: number;
}

export const Container = styled.section<Props>`
  display: flex;
  width: 90%;
  height: 100%;
  flex-direction: ${({ windowWidth }) => (windowWidth <= 1024 ? "column" : "row")};
  justify-content: center;
  align-items: center;
  gap: 4vh;
  /* :hover {
    transition: all 0s ease-in-out;
    transform: ${({ windowWidth }) =>(Number(windowWidth) < 1024 ? "" : "scale(1.03)")};
  } */
`;
export const SwiperContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text);
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;
export const Video = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  border-radius: 15px;
  height: auto;
  //border: 1px solid red;
`;
