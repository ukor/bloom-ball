import React from "react";
import styled from "styled-components";
import {
  Flex,
  Box,
  Text,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Divider,
  SlideFade,
  useMediaQuery
} from "@chakra-ui/react";

import { OUTTER_SPACE } from "../../../shared";

const FaqSectorWrapper = styled.div``;
const dummyText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const FAQS = [
  {
    question: "Is there a private sell",
    answer: dummyText
  },
  {
    question: "What kind of marketing will be done for Bloom Ball",
    answer: dummyText
  },
  {
    question: "Another FAQ",
    answer: dummyText
  },
  {
    question: "What kind of marketing will be done for Bloom Ball 1",
    answer: dummyText
  },
  {
    question: "Another FAQ 1",
    answer: dummyText
  }
];

function FAQSection() {
  const [isLargeScreen] = useMediaQuery("(min-width:  48em)");

  const accrodionContents = FAQS.map((c) => (
    <AccordionItem key={c.question}>
      <h2>
        <AccordionButton _expanded={{ bg: "orange", color: "white" }}>
          <Box flex="1" textAlign="left">
            {c.question}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel paddingBlock="4">{c.answer}</AccordionPanel>
    </AccordionItem>
  ));

  return (
    <FaqSectorWrapper>
      <Box bgColor="black" color="white" paddingX={OUTTER_SPACE} paddingY="32">
        <Flex direction={isLargeScreen ? "row" : "column"} width="100%" justify="center" align="center">
          <Box flex="2" width="100%">
            <SlideFade in={true} offsetY="20px">
              <Text fontSize="24" color="orange">
                Some of our most frequently ask questions
              </Text>
              <Heading marginBottom="3" color="orange" as="h3" size="lg">
                FAQS
              </Heading>
              <Divider color="orange" width="20" />
            </SlideFade>
          </Box>
          <Box flex="3" width="100%">
            <Accordion width="100%" allowToggle={true} colorScheme="orange">
              {accrodionContents}
            </Accordion>
          </Box>
        </Flex>
      </Box>
    </FaqSectorWrapper>
  );
}

export default FAQSection;
