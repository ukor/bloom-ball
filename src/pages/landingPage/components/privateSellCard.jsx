import React from "react";
import { Box } from "@chakra-ui/react";

import PrivateSellForm from "./privateSellForm";
import { OUTTER_SPACE } from "../../../shared";

function PrivateSellCard() {
  return (
    <Box marginY={{ base: 10, md: 0, lg: 0 }} flex={{ base: 1 }} marginX={OUTTER_SPACE}>
      <Box boxShadow="md" paddingX="6" paddingY="10" rounded="md" bg="#141414" width="100%" height="max">
        <PrivateSellForm />
      </Box>
    </Box>
  );
}

export default PrivateSellCard;
