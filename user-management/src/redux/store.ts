import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/userSlice";
import filterReducer from "./filters/filterSlice";
import sortReducer from "./sort/sortSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    filters: filterReducer,
    sort: sortReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
