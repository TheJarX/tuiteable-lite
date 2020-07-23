import React from "react";
import { Box, ButtonGroup, Text, Button } from "@chakra-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import TuitItem from "./TuitItem";
import { tuitDeleted } from "./TuitSlice";
import { useParams, useHistory } from "react-router-dom";

function TuitDetail() {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const tuit = useSelector((state) => state.tuit.tuits);

  const handleClick = (e) => {
    // dispatch(tuitDeleted(id));
    // history.replace("/tuits");
    console.log(tuit);
  };
  return (
    <Box width={250} m="auto" pt={4}>
      <Text textAlign="center" mb={4} fontSize="2xl">
        Tuit Details
      </Text>
      <TuitItem {...tuit} />
      <ButtonGroup spacing={4} justifyContent="flex-end" d="flex">
        <Button variantColor="red" onClick={handleClick}>
          Delete
        </Button>
        <Link to={`/tuits/${id}/edit`}>
          <Button variantColor="teal">Edit</Button>
        </Link>
      </ButtonGroup>
    </Box>
  );
}

export default TuitDetail;
