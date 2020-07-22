import { createSlice } from "@reduxjs/toolkit";

const TuitSlice = createSlice({
  name: "tuit",
  initialState: {
    tuits: [],
  },
  reducers: {
    tuitAdded: (state, { payload: tuit }) => {
      state.tuits = [...state.tuits, tuit];
    },
    tuitUpdated: (state, { payload: tuit }) => {
      const localTuit = state.tuits[tuit.id];
      localTuit.user = tuit.user;
      localTuit.body = tuit.body;
    },
    tuitDeleted: (state, { payload: id }) => {
      state.tuits.splice(id, 1);
    },
  },
});

export const { tuitAdded, tuitUpdated, tuitDeleted } = TuitSlice.actions;

export default TuitSlice.reducer;
