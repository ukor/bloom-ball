import React from "react";
import styled from "styled-components";
import { Flex, Box, Text, Heading, Img, Divider, SlideFade, useMediaQuery } from "@chakra-ui/react";

import { OUTTER_SPACE } from "../../../shared";

const AboutSectorWrapper = styled.div``;

function AboutSector() {
  const [isLargeScreen] = useMediaQuery("(min-width:  48em)");
  return (
    <AboutSectorWrapper>
      <Box bgColor="black" color="white" paddingX={OUTTER_SPACE} paddingY="10">
        <Flex direction={isLargeScreen ? "row" : "column"} width="100%" align="center" justify="center">
          <Box flex="1">
            <SlideFade in={true} offsetY="20px">
              <Text fontSize="24" color="orange">
                About
              </Text>
              <Heading marginBottom="3" color="orange" as="h3" size="lg">
                Bloom Ball Token
              </Heading>
              <Divider color="orange" width="20" />
            </SlideFade>
            <Text marginTop="5">
              Bloom Ball Token (BBT) is a token on Binance Smart Chain boasting a number of impressive features.
            </Text>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
          </Box>
          <Box flex="1">
            <Box align="center">
              <Img
                align="center"
                width={{ base: "sm", lg: "md" }}
                height={{ base: "sm", lg: "md" }}
                src="https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=010"
              />
            </Box>
          </Box>
        </Flex>
      </Box>
    </AboutSectorWrapper>
  );
}

export default AboutSector;
