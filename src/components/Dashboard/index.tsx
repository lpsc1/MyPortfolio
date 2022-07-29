import React from "react";
import { About } from "./About";
import { ContactMe } from "./Contact";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { Qualifications } from "./Qualifications";
import { Skills } from "./Skills";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header/>
      <Home />
      <About />
      <Skills />
      <Qualifications />
      <Projects />
      <ContactMe />
      <Footer />
    </Container>
  );
}
