import React from "react";
import { Box, Text } from "@chakra-ui/core";
import TuitForm from "./TuitForm";
import TuitItem from "./TuitItem";

function TuitsList(props) {
  return (
    <div>
      <Text fontWeight="bold" textAlign="center" fontSize="3xl" mb={4} pt={4}>
        Tuiteable (Lite-Reloaded)
      </Text>
      <Box width="250px" m="auto">
        <TuitForm />

        <Box>
          <TuitItem />
          <TuitItem />
          <TuitItem />
          <TuitItem />
        </Box>
      </Box>
    </div>
  );
}

export default TuitsList;
