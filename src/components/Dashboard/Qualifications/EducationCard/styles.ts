import styled from "styled-components";

interface Props {
  windowWidth: number;
}

export const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-inline: 10rem;
  .item-top {
    margin-top: -8rem;
  }
  .item-bottom {
    margin-top: 270px;
  }
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text);
  
`;
export const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 13px;
  color: var(--secundary);
`;
export const TimeLine = styled.div<Props>`
  height: ${({windowWidth}) => windowWidth < 1024 ? '60%' : '75%'} ;
  align-items: center;
  //padding: 1px;
  width: 2px;
  justify-content: center;
  background-color: var(--secundary);
  border-radius: 3px;
`;
