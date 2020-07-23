import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const API_URL = "https://tuiteable-redux-api.herokuapp.com/tuits";

export const fetchTuits = createAsyncThunk("dogs/fetchTuits", async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
});

export const createdTuit = createAsyncThunk(
  "dogs/createdTuits",
  async (tuit) => {
    console.log(tuit);
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(tuit),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(response.statusText);
    return await response.json();
  }
);

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
      const localTuit = state.tuits.find((el) => el.id === tuit.id);
      localTuit.user = tuit.user;
      localTuit.body = tuit.body;
    },
    tuitDeleted: (state, { payload: id }) => {
      state.tuits.splice(
        state.tuits.findIndex((tuit) => tuit.id === id),
        1
      );
    },
  },
  extraReducers: {
    [fetchTuits.fulfilled]: (state, { payload: tuits }) => {
      state.tuits = tuits;
    },
    [createdTuit.fulfilled]: (state, { payload: tuit }) => {
      state.tuits.push(tuit);
    },
  },
});

export const { tuitAdded, tuitUpdated, tuitDeleted } = TuitSlice.actions;

export default TuitSlice.reducer;
