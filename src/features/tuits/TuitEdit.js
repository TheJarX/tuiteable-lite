import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Text,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/core";

function TuitEdit(props) {
  return (
    <Box width={250} m="auto" pt={4}>
      <Text textAlign="center" mb={4} fontSize="2xl">
        Tuit Edit
      </Text>
      <Box
        {...props}
        boxShadow="sm"
        backgroundColor="whiteAlpha.500"
        border={1}
        p={4}
      >
        <form>
          <FormControl>
            <FormLabel>Tuit user</FormLabel>
            <Input mb={2} />
          </FormControl>
          <FormControl>
            <FormLabel>Tuit body</FormLabel>
            <Input mb={2} />
          </FormControl>
          <ButtonGroup spacing={4} mt={4} justifyContent="flex-end" d="flex">
            <Button variant="link" variantColor="teal">
              Back
            </Button>
            <Button type="submit" variantColor="teal">
              Save
            </Button>
          </ButtonGroup>
        </form>
      </Box>
    </Box>
  );
}

export default TuitEdit;
