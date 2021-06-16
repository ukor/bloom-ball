import React from "react";
import styled from "styled-components";
import { Box, Text } from "@chakra-ui/react";
import { OUTTER_SPACE } from "../../shared";
const FooterWrapper = styled.div``;

function Footer() {
  return (
    <FooterWrapper>
      <Box paddingX={OUTTER_SPACE} bgColor="black" height="max">
        <Text paddingTop="5" color="white" align="center">
          &copy; Bloom Ball Token {new Date().getFullYear()}. All Rights Reserved.
        </Text>
        <Text color="gray.500" paddingX={{ base: 0, lg: 20 }} paddingY="10">
          LEGAL DISCLAIMER: None of the information on this website should be construed as providing legal or financial
          advice. Please note there are always risks associated with smart contracts. Please use at your own risk. Bloom
          Ball Token is not a registered broker, analyst or investment advisor. If you are willing to, or have purchased
          Bloom Ball, you agree that you are not purchasing a security or investment. The Bloom Ball team can not be
          held liable for any losses or taxes you may incur. You also agree that the team is presenting the token as it
          was launched. Do conduct your own due diligence and consult your financial advisor before making any
          investment decisions.
        </Text>
      </Box>
    </FooterWrapper>
  );
}

export default Footer;
