import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { tuitAdded } from "./TuitSlice";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/core";

function TuitForm(props) {
  const dispatch = useDispatch();
  const [tuit, setTuit] = useState({
    user: "",
    body: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(tuitAdded(tuit));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTuit({ ...tuit, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Tuit user</FormLabel>
        <Input mb={2} onChange={handleChange} name="user" value={tuit.user} />
      </FormControl>
      <FormControl>
        <FormLabel>Tuit body</FormLabel>
        <Input mb={2} onChange={handleChange} name="body" value={tuit.body} />
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
