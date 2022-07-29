import styled from "styled-components";

export const Container = styled.section`
  width: 40vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border-bottom: 5px solid var(--secundary);
  padding: 1rem;
  .icon {
    width: 35px;
    height: 35px;
    color: var(--secundary);
  }
`;
