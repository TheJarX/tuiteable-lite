import React from "react";
import { Box } from "@chakra-ui/core";
import TuitsList from "./features/tuits/TuitsList";
import TuitDetail from "./features/tuits/TuitDetail";
import TuitEdit from "./features/tuits/TuitEdit";

function App() {
  return (
    <Box minHeight="100vh" backgroundColor="blackAlpha.100" textAlign="left">
      <TuitsList />
      {/* <TuitDetail /> */}
      {/* <TuitEdit /> */}
    </Box>
  );
}

export default App;
