import { configureStore } from "@reduxjs/toolkit";
import usersDataSlice from "./usersDataSlice";

export const store = configureStore({
  reducer: {
    utils: usersDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
