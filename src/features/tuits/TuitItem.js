import React from "react";
import { Box, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";

function TuitItem({ id, user, body }) {
  return (
    <Link to={`/tuits/${id}`}>
      <Box
        boxShadow="sm"
        backgroundColor="whiteAlpha.500"
        border={1}
        p={4}
        mb={4}
      >
        <Text fontSize="sm" mb={2} color="teal.600" fontWeight="bold">
          {user}
        </Text>
        <Text>{body}</Text>
      </Box>
    </Link>
  );
}

export default TuitItem;
