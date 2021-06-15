import React from "react";
import { Box, Button, InputGroup, Img, Input, InputLeftAddon } from "@chakra-ui/react";
import styled from "styled-components";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import BNBIcon from "./../../../assets/images/bnb.svg";

const FormWrapper = styled.div`
  .icon {
    background-color: #141414;
    position: relative;
    z-index: 9;
    border: 1px solid orange;
    border-radius: 50px;
    font-size: 3rem;
  }
`;

function PrivateSellForm() {
  return (
    <FormWrapper>
      <Box bg="#141414">
        <InputGroup _focus={{ borderColor: "orange" }} size="lg" bg="inherit">
          <InputLeftAddon bg="#141414" borderColor="orange" color="white" border="1px" pointerEvents="none">
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
        <CgArrowsExchangeAltV className="icon" color="white" />
      </Box>
      <Box marginTop="-5" opacity="2" bg="#141414">
        <InputGroup colorScheme="orange" _focus={{ borderColor: "orange" }} size="lg" bg="inherit">
          <InputLeftAddon bg="#141414" borderColor="orange" color="white" border="1px" pointerEvents="none">
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

      <Box bg="#141414" paddingTop="10">
        <Button size="lg" colorScheme="orange" width="full">
          Connect Wallet
        </Button>
      </Box>
    </FormWrapper>
  );
}

export default PrivateSellForm;
