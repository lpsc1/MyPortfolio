import styled from "styled-components";

interface Props {
  windowWidth: number;
}

export const Container = styled.footer<Props>`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  background: var(--secundary);
  padding: 4rem;
  justify-content: space-evenly;
  align-items: center;
  color: var(--primary);
  :hover {
    transition: 0.1s;
    transform: ${({ windowWidth }) => windowWidth < 1024 ? "" : "scale(1.03)"};
  }
`;
export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Nav = styled.div`
  display: flex;
  gap: 1rem;
`;
export const NavLink = styled.a`
  text-decoration: none;
  color: var(--primary);
  :hover {
    filter: opacity(0.7);
    transition: 0.1s;
    transform: scale(1.05);
  }
`;
export const NavSvg = styled.a`
.icon {
  width: 30px;
  height: 30px;
  color: var(--primary);
}
  :hover {
    filter: opacity(0.7);
    transition: 0.1s;
    transform: scale(1.05);
  }
`;
