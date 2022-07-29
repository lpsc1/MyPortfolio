import React, { useContext } from "react";
import { Container, Title } from "./styles";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { Box} from "../About/styles";
import { SwiperBox } from "./swiper";
import { ScreenContext } from "../../../context";

export function Projects() {
  const { setIsFocus, windowWidth } = useContext(ScreenContext);

  function handleToggleFocus() {
    setIsFocus({
      isAboutFocus: false,
      isHomeFocus: false,
      isContactFocus: false,
      isProjectsFocus: true,
      isQualificationsFocus: false,
      isSkillsFocus: false,
    });
  }
  return (
    <Box id="projects" onMouseOverCapture={() => handleToggleFocus()} onTouchStartCapture={() => handleToggleFocus()}>
      <Container windowWidth={windowWidth}>
        <Title windowWidth={windowWidth}>
          <h1>Projects</h1>
          <h5>Most recent work</h5>
        </Title>
        
        <Swiper
          cssMode={true}
          navigation={true}
          color={"#555f9d"}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Autoplay, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide className="mySwiperSlide">
            {" "}
            <SwiperBox
              isVideo={true}
              img="video-portfolio.mp4"
              title="Personal Portfolio Website"
              subTitle="My Personal Portfolio Website made using React, HTML, CSS, TS and JS. Styles with styled-components."
              link=""
            />
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            {" "}
            <SwiperBox
              isVideo={true}
              img="appCalculator.mp4"
              title="Calculator"
              subTitle="Calculator that i made using React, HTML, CSS, TS and JS. Styles with Chakra UI."
              link="https://next-app-calculator.netlify.app/"
            />
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            {" "}
            <SwiperBox
              img="gofinances.png"
              title="App GoFinances"
              subTitle="A mobile app that i made using React Native, CSS, TS and JS. Styles with styled-components."
              link="https://github.com/lpsc1/AppGoFinances"
            />
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            {" "}
            <SwiperBox
              img="appToDo.png"
              title="App To.do"
              subTitle="A mobile app that i made using React Native, CSS, TS and JS. Styles with styled-components."
              link="https://github.com/lpsc1/AppTo.do"
            />
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            {" "}
            <SwiperBox
              img="worldTrip.png"
              title="WorldTrip Website"
              subTitle="A Website that i made using React, HTML, CSS, TS and JS. Styles with Chakra UI."
              link="https://github.com/lpsc1/world-trip"
            />
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            {" "}
            <SwiperBox
              img="dashgo.png"
              title="Dashgo. Website"
              subTitle="A Website that i to made using React, HTML, CSS, TS and JS. Styles with Chakra UI."
              link="https://github.com/lpsc1/AppDashGo"
            />
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            {" "}
            <SwiperBox
              img="dtmoney.png"
              title="dt money Website"
              subTitle="A Website that i made using React, HTML, CSS, TS and JS. Styles with Chakra UI."
              link="https://github.com/lpsc1/app-dt-money"
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
}
