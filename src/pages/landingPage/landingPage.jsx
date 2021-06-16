import React from "react";
import styled from "styled-components";
import { Header, Footer } from "../../components/navigation";
import Hero from "./components/hero";

const LandingPageWrapper = styled.div``;

function LandingPage() {
  return (
    <LandingPageWrapper>
      <Header />
      <Hero />
      <Footer />
    </LandingPageWrapper>
  );
}

export default LandingPage;
