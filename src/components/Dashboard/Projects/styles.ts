import styled from "styled-components";

interface Props {
  windowWidth: number;
}

export const Container = styled.section<Props>`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  .mySwiper {
    align-items: center;
    justify-content:center ;
    width: ${({ windowWidth }) => (windowWidth < 1024 ? "90%" : "60%")};
    padding: 3rem;
    border-radius: 10px;
    .mySwiperSlide{
     // border: 1px solid red;
      display: flex;
      justify-content: center;
      align-items:center ;
    }
  }
  .swiper-pagination-bullet-active {
    background-color: var(--secundary);
  }
  .swiper-button-prev {
    color: var(--secundary);
  }
  .swiper-button-next {
    color: var(--secundary);
  }
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
