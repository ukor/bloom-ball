import React from "react";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";

import HeroHeader from "./heroHeading";
import PrivateSellCard from "./privateSellCard";

function Hero() {
  const [isLargeScreen] = useMediaQuery("(min-width:  48em)");
  return (
    <Box marginY={{ base: 20, lg: 32 }}>
      <Flex
        direction={isLargeScreen ? "row" : "column"}
        bgColor="black"
        width="100%"
        height={{ base: "50vh", lg: "50vh" }}
        align="center"
        justify="center"
      >
        <HeroHeader />
        <PrivateSellCard />
      </Flex>
    </Box>
  );
}

export default Hero;
