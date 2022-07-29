import styled from "styled-components";

interface Props {
  windowWidth: number;
}

export const Container = styled.header<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: var(--secundary);
  padding: 25px;
  a {
    text-decoration: none;
    color: var(--primary);
  }
  :hover {
    transition: ease-in-out;
    transform: ${({ windowWidth }) =>
      windowWidth < 1024 ? "" : "scale(1.01)"};
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`;
export const Logo = styled.div`
  color: var(--primary);
  :hover {
    filter: opacity(0.7);
    transition: 0.1s;
    transform: scale(1.04);
  }
  cursor: default;
`;
export const LinkNav = styled.p`
  font-weight: 400;
  :hover {
    filter: opacity(0.9);
    transform: scale(1.04);
  }
`;

export const Nav = styled.div<Props>`
  gap: 2rem;
  display: flex;
  align-items: center;
  
  .home-active {
    font-weight: 500;
    color: var(--active);
  }
  .about-active {
    font-weight: 500;
    color: var(--active);
  }
  .skills-active {
    font-weight: 500;
    color: var(--active);
  }
  .qualifications-active {
    font-weight: 500;
    color: var(--active);
  }
  .projects-active {
    font-weight: 500;
    color: var(--active);
  }
  .contact-active {
    font-weight: 500;
    color: var(--active);
  }
`;
