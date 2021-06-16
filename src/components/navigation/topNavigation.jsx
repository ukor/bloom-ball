import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Flex, Box, Button, Heading, Link, useMediaQuery } from "@chakra-ui/react";
import { BiMenuAltRight } from "react-icons/bi";

import { OUTTER_SPACE } from "../../shared";

const TopNavigationWrapper = styled.header`
  color: #fff;
`;

const links = [
  {
    label: "Tokenocomics",
    ref: "tokenocomics"
  },
  {
    label: "Road Map",
    ref: "roadMap"
  },
  {
    label: "FAQ",
    ref: "faq"
  },
  {
    label: "How to buy",
    ref: "howToBuy"
  }
];

function Header() {
  const PADDING_TOP = { base: 3, lg: 5 };
  const [isLargeScreen] = useMediaQuery("(min-width:  48em)");
  return (
    <TopNavigationWrapper>
      <Flex bgColor="black" width="full" align="space-evenly" justify="flex-start">
        <Box flex="1" marginLeft={OUTTER_SPACE} paddingY={PADDING_TOP}>
          <Heading color="gray.500" as="h1" size="lg">
            Bloom Ball
          </Heading>
        </Box>
        {isLargeScreen ? (
          <Box flex="3" paddingY={PADDING_TOP} width="max">
            <HeaderLinks links={links} />
          </Box>
        ) : (
          <React.Fragment></React.Fragment>
        )}
        <ActionButton outterSpace={OUTTER_SPACE} paddingTop={PADDING_TOP} isLargeScreen={isLargeScreen} />
      </Flex>
    </TopNavigationWrapper>
  );
}

function HeaderLinks({ links }) {
  const navLinks = links.map((link) => (
    <Box paddingX={{ base: 3, lg: 5 }} key={link.label}>
      <Link textAlign="center" _hover={{ color: "orange", textDecoration: "none" }} fontSize="17" color="white" to="#">
        {link.label}
      </Link>
    </Box>
  ));

  return (
    <Flex height="max" width="100%" align="center" justify="center">
      {navLinks}
    </Flex>
  );
}

HeaderLinks.propTypes = {
  links: PropTypes.array.isRequired
};

function ActionButton({ isLargeScreen, paddingTop, outterSpace }) {
  return (
    <Box flex="1" marginRight={outterSpace}>
      <Flex width="100%" align="flex-end" justify="flex-end">
        <Box marginRight="0" paddingY={paddingTop}>
          {isLargeScreen ? (
            <Button colorScheme="orange" variant="outline">
              Buy Now
            </Button>
          ) : (
            <BiMenuAltRight fontSize="36" />
          )}
        </Box>
      </Flex>
    </Box>
  );
}

ActionButton.propTypes = {
  isLargeScreen: PropTypes.bool.isRequired,
  paddingTop: PropTypes.object.isRequired,
  outterSpace: PropTypes.object.isRequired
};

export default Header;
