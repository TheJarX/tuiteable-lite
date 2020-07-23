import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/core";
import { useSelector, useDispatch } from "react-redux";
import TuitForm from "./TuitForm";
import TuitItem from "./TuitItem";
import { fetchTuits } from "./TuitSlice";

function TuitsList(props) {
  const dispatch = useDispatch();
  const tuits = useSelector((state) => state.tuit.tuits);
  useEffect(() => {
    dispatch(fetchTuits());
  }, []);
  return (
    <div>
      <Text fontWeight="bold" textAlign="center" fontSize="3xl" mb={4} pt={4}>
        Tuiteable (Lite-Reloaded)
      </Text>
      <Box width="250px" m="auto">
        <TuitForm />

        <Box>
          {tuits.map((tuit) => (
            <TuitItem {...tuit} key={`${tuit.user}-${tuit.id}`} />
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default TuitsList;
