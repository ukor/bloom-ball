import React from "react";
import { Box, Button, InputGroup, Img, Input, InputLeftAddon, useToast } from "@chakra-ui/react";
import styled from "styled-components";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import numeral from "numeral";
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
  const toast = useToast();
  const [BNBamount, setBNBamount] = React.useState(0.1);
  const [BBTamount, setBBTamount] = React.useState(numeral(3000000000).format("0,0"));

  const handleBNB = (event) => {
    let bnb = event.target.value;
    let bbt = 0;
    if (typeof bnb === "string" && bnb !== "") {
      bbt = (Number(bnb) * 3000000000) / 0.1;
    }
    setBNBamount(bnb);
    setBBTamount(numeral(bbt).format("0,0"));
  };
  const handleBBT = (event) => {
    let bbt = event.target.value;
  };
  const handleBBTFocus = (event) => {
    let bbt = event.target.value;
    bbt = bbt.replace(/,/g, "");
    setBBTamount(bbt);
  };
  const handleBBTBlur = (event) => {
    let bbt = event.target.value; // ((Number(BNBamount) * 3000000000) / 0.1);
    bbt = numeral(bbt).format("0,0");
    setBBTamount(bbt);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isNaN(BNBamount)) {
      toast({
        title: "Invalid Input",
        description: "Input must be a number",
        status: "info",
        duration: 9000,
      });
      return;
    }
    if (!isNaN(BNBamount) && BNBamount < 0.1) {
      toast({
        title: "Minimum Amount",
        description: "Amount is too low. Amount should not be less then 0.1BNB.",
        status: "info",
        duration: 9000,
        variant: "solid",
      });
      return;
    }
    if (!isNaN(BNBamount) && BNBamount > 30) {
      toast({
        title: "Maximum Amount",
        description: "Amount is too high. Amount should not be more then 30BNB.",
        status: "info",
        duration: 9000,
        variant: "solid",
      });
      return;
    }
  };
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
            onChange={handleBNB}
            value={BNBamount}
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
            disabled="disabled"
            borderColor="orange"
            color="white"
            _focus={{ borderColor: "orange" }}
            // _disabled={{borderColor:  "orange"}}
            pattern="-?[0-9]+[\,.]*[0-9]+"
            borderLeft="0"
            type="text"
            placeholder="BBT Amount"
            value={BBTamount}
            onChange={handleBBT}
            onFocus={handleBBTFocus}
            onBlur={handleBBTBlur}
          />
        </InputGroup>
      </Box>

      <Box bg="#141414" paddingTop="10">
        <Button onClick={handleSubmit} size="lg" colorScheme="orange" width="full">
          Connect Wallet
        </Button>
      </Box>
    </FormWrapper>
  );
}

export default PrivateSellForm;
