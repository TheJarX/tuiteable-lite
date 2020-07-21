import React from "react";
import { Box, ButtonGroup, Text, Button } from "@chakra-ui/core";
import TuitItem from "./TuitItem";

function TuitDetail(props) {
  return (
    <Box width={250} m="auto" pt={4}>
      <Text textAlign="center" mb={4} fontSize="2xl">
        Tuit Details
      </Text>
      <TuitItem />
      <ButtonGroup spacing={4} justifyContent="flex-end" d="flex">
        <Button variantColor="red">Delete</Button>
        <Button variantColor="teal">Edit</Button>
      </ButtonGroup>
    </Box>
  );
}

export default TuitDetail;
