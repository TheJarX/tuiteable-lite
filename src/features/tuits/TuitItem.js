import React from 'react';
import {Box, Text} from "@chakra-ui/core";

function TuitItem(props) {
  return (
    <Box boxShadow="sm" backgroundColor="whiteAlpha.500" border={1} p={4} mb={4}>
      <Text fontSize="sm" mb={2} color="teal.600" fontWeight="bold">
        Bonnie
      </Text>
      <Text>#LiberenABonnie</Text>
    </Box>
  );
}

export default TuitItem;