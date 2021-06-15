import React from "react";
import styled from "styled-components";
import { Box, Heading, Button } from "@chakra-ui/react";

import { OUTTER_SPACE } from "../../../shared";

const HeroHeadingWrapper = styled.div``;

function HeroHeading() {
  return (
    <HeroHeadingWrapper>
      <Box marginY={{ base: 10, md: 0, lg: 0 }} marginX={OUTTER_SPACE} flex={{ base: 1 }}>
        <Heading color="gray.500" as="h1" size="4xl">
          Bloom Ball
        </Heading>
        <Box paddingTop="3">
          <Button colorScheme="orange">White Paper</Button>
        </Box>
      </Box>
    </HeroHeadingWrapper>
  );
}

export default HeroHeading;
