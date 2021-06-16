import React from "react";
import styled from "styled-components";
import { Header, Footer } from "../../components/navigation";
import Hero from "./components/hero";
import AboutSection from "./components/about";

const LandingPageWrapper = styled.div``;

function LandingPage() {
  return (
    <LandingPageWrapper>
      <Header />
      <Hero />
      <AboutSection />
      <Footer />
    </LandingPageWrapper>
  );
}

export default LandingPage;
