import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/userSlice";
import filterReducer from "./filters/filterSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    filters: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
