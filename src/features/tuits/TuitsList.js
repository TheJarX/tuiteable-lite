import React from "react";
import { Box, Text } from "@chakra-ui/core";
import { useSelector } from "react-redux";
import TuitForm from "./TuitForm";
import TuitItem from "./TuitItem";

function TuitsList(props) {
  const tuits = useSelector((state) => state.tuit.tuits);

  return (
    <div>
      <Text fontWeight="bold" textAlign="center" fontSize="3xl" mb={4} pt={4}>
        Tuiteable (Lite-Reloaded)
      </Text>
      <Box width="250px" m="auto">
        <TuitForm />

        <Box>
          {tuits.map((tuit, id) => (
            <TuitItem {...{ ...tuit, id }} key={`${tuit.user}-${id}`} />
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default TuitsList;
