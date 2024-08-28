import React, { useContext } from "react";
import { ScreenContext } from "../../../../context";
import { ButtonBox } from "../../../ButtonBox";
import { Container, SwiperContainer, Img, Video, Box } from "./styles";

interface SwiperBoxProps {
  img: string;
  title: string;
  subTitle: string;
  link: string;
  isVideo?: boolean;
}

export function SwiperBox({
  img,
  title,
  subTitle,
  link,
  isVideo,
}: SwiperBoxProps) {
  const { windowWidth } = useContext(ScreenContext);
  return (
    <Container windowWidth={windowWidth} style={{ overflowY: "hidden" }}>
      {isVideo ? (
        <Box>
          <Video autoPlay muted loop src={img} />
        </Box>
      ) : (
        <Box style={{ maxHeight: "5vh", borderRadius: "8px" }}>
          <Img
            src={img}
            alt=""
            style={{ maxHeight: "50vh", borderRadius: "8px" }}
          />
        </Box>
      )}

      <SwiperContainer>
        <h2>{title}</h2>
        <p style={{ marginBottom: 8 }}>{subTitle}</p>
        <a href={link} target={"_blank"} style={{ textDecoration: "none" }}>
          <ButtonBox
            icon="HiArrowNarrowRight"
            title="Check out"
            type="button"
          />
        </a>
      </SwiperContainer>
    </Container>
  );
}
