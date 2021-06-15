import React from "react";
import { Flex, Box, Heading, Button, InputGroup, Img, Input, InputLeftAddon, useMediaQuery } from "@chakra-ui/react";
import styled from "styled-components";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import BNBIcon from "./../../assets/images/bnb.svg";
import { Header } from "../../components/navigation";

const LandingPageWrapper = styled.div`
  .icon {
    background-color: #141414;
    position: relative;
    z-index: 9;
    border: 1px solid orange;
    border-radius: 50px;
  }
`;

function LandingPage() {
  const OUTTER_SPACE = { base: 10, sm: 2, md: 10, lg: 24, xl: 32 };
  const [isLargeScreen] = useMediaQuery("(min-width:  48em)");
  return (
    <LandingPageWrapper>
      <Header />
      <Flex
        direction={isLargeScreen ? "row" : "column"}
        bgColor="black"
        width="100%"
        height="50vh"
        align="center"
        justify="center"
      >
        <Box marginX={OUTTER_SPACE} flex={{ base: 1 }}>
          <Heading color="gray.500" as="h1" size="4xl">
            Bloom Ball
          </Heading>
          <Box paddingY="2">
            <Button colorScheme="orange">White Paper</Button>
          </Box>
        </Box>
        <Box flex={{ base: 1 }} marginX={OUTTER_SPACE}>
          <Box boxShadow="md" paddingX="6" paddingY="10" rounded="md" bg="#141414" width="100%" height="max">
            <Box opacity="2" bg="inherit">
              <InputGroup _focus={{ borderColor: "orange" }} size="lg" bg="inherit">
                <InputLeftAddon borderColor="orange" color="white" border="1px" bg="inherit" pointerEvents="none">
                  <Img src={BNBIcon} />
                </InputLeftAddon>
                <Input
                  borderColor="orange"
                  color="white"
                  _focus={{ borderColor: "orange" }}
                  borderLeft="0"
                  type="number"
                  placeholder="Amount of BNB"
                />
              </InputGroup>
            </Box>
            <Box marginTop="-5" bg="#141414" align="right" marginRight="10">
              <CgArrowsExchangeAltV className="icon" fontSize="50" color="white" />
            </Box>
            <Box marginTop="-5" opacity="2" bg="inherit">
              <InputGroup colorScheme="orange" _focus={{ borderColor: "orange" }} size="lg" bg="inherit">
                <InputLeftAddon borderColor="orange" color="white" border="1px" bg="inherit" pointerEvents="none">
                  BBT
                </InputLeftAddon>
                <Input
                  borderColor="orange"
                  color="white"
                  _focus={{ borderColor: "orange" }}
                  borderLeft="0"
                  type="number"
                  placeholder="BBT Amount"
                />
              </InputGroup>
            </Box>

            <Box bg="inherit" paddingTop="10">
              <Button size="lg" colorScheme="orange" width="full">
                Connect Wallet
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </LandingPageWrapper>
  );
}

export default LandingPage;
