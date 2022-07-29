import styled from "styled-components";

interface Props {
  isActive?: boolean;
  windowWidth?: number;
}

export const Container = styled.section<Props>`
  :hover {
    transition: 0.5s;
    transform: ${({ windowWidth }) => Number(windowWidth) < 1024 ? "" : "scale(1.03)"};
  }
`;
export const Title = styled.head<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  color: var(--text);
  font-size: ${({ windowWidth }) => (Number(windowWidth) < 1024 ? "16px" : "25px")};
  h5 {
    font-size: 13px;
  }
  margin-top: 8rem;
`;
export const Menu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;
export const Mode = styled.button<Props>`
  display: flex;
  color: var(--text);
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border: none;
  background-color: var(--primary);
  :hover {
    transform: scale(1.01);
  }
  color: ${({ isActive }) => (isActive ? "var(--secundary)" : "var(--text)")};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "")};
  .icon {
    width: 40px;
    height: 40px;
    color: ${({ isActive }) => (isActive ? "var(--secundary)" : "var(--text)")};
  }
`;
export const Content = styled.main`
  display: flex;
  justify-content: center;
`;
