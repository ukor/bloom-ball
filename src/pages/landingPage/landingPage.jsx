import React from "react";
import styled from "styled-components";
import { Header } from "../../components/navigation";
import Hero from "./components/hero";

const LandingPageWrapper = styled.div``;

function LandingPage() {
  return (
    <LandingPageWrapper>
      <Header />
      <Hero />
    </LandingPageWrapper>
  );
}

export default LandingPage;
