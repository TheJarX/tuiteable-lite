import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Text,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { tuitUpdated } from "./TuitSlice";
import { Link } from "react-router-dom";

function TuitEdit(props) {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const tuit = useSelector((state) => state.tuit.tuits[id]);
  const [newTuit, setNewTuit] = useState({ id, ...tuit });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(tuitUpdated(newTuit));
    history.replace("/tuits");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTuit({
      ...newTuit,
      [name]: value,
    });
  };

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
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Tuit user</FormLabel>
            <Input
              mb={2}
              onChange={handleChange}
              name="user"
              value={newTuit.user}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Tuit body</FormLabel>
            <Input
              mb={2}
              onChange={handleChange}
              name="body"
              value={newTuit.body}
            />
          </FormControl>
          <ButtonGroup spacing={4} mt={4} justifyContent="flex-end" d="flex">
            <Link to={`/tuits/${id}`}>
              <Button variant="link" variantColor="teal">
                Back
              </Button>
            </Link>
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
