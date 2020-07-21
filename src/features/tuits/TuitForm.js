import React from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/core";

function TuitForm(props) {
  return (
    <form>
      <FormControl>
        <FormLabel>Tuit user</FormLabel>
        <Input mb={2} />
      </FormControl>
      <FormControl>
        <FormLabel>Tuit body</FormLabel>
        <Input mb={2} />
      </FormControl>
      <Box textAlign="right" mb={4}>
        <Button
          type="submit"
          textAlign="center"
          backgroundColor="teal.500"
          color="whiteAlpha.900"
        >
          Tuit!
        </Button>
      </Box>
    </form>
  );
}

export default TuitForm;
