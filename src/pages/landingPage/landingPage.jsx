import React from "react";
import { Flex, Text, Box, Heading, ButtonGroup, Button } from "@chakra-ui/react";
import styled from "styled-components";

const LandingPageWrapper = styled.div`
  /* background-color: #000;
  color: #fff;
  width: 100vw;
  height: 100vh;
  text-align: center; */
`;

function LandingPage() {
  return (
    <LandingPageWrapper>
      <Flex bgColor="black" width="100vw" height="100vh" align="center" justify="center">
        <Box>
          <Heading color="gray.500" as="h1" size="4xl">
            Bloom Ball
          </Heading>
          <Box paddingY="2" align="center">
            <Text textAlign="center" color="white" fontSize="xxl" fontWeight="extrabold">
              Bloom Ball
            </Text>
          </Box>
          <Box paddingY="2" align="center">
            <ButtonGroup spacing="6">
              <Button colorScheme="orange" align="center">
                Private Sell
              </Button>
              <Button>White Paper</Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Flex>
    </LandingPageWrapper>
  );
}

export default LandingPage;
