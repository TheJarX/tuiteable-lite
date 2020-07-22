import { configureStore } from "@reduxjs/toolkit";
import TuitReducer from "../features/tuits/TuitSlice";

export default configureStore({
  reducer: {
    tuit: TuitReducer,
  },
});
