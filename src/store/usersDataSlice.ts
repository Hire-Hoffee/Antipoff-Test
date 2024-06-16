import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

export const usersDataSlice = createSlice({
  name: "usersData",
  initialState,
  reducers: {
    testData: (state, action: PayloadAction<number>) => {
      console.log("testData", action);
      console.log("testData", state);
    },
  },
});

export const { testData } = usersDataSlice.actions;

export default usersDataSlice.reducer;
