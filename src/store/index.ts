import { configureStore } from "@reduxjs/toolkit";
import usersDataSlice from "./usersDataSlice";
import { usersApi } from "@/api/usersApi";

export const store = configureStore({
  reducer: {
    utils: usersDataSlice,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
