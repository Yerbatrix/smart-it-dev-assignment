import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SortState {
  sortBy: "name" | "username" | "email" | "phone" | "";
  direction: "asc" | "desc";
}

const initialState: SortState = {
  sortBy: "",
  direction: "asc",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortColumn(
      state,
      action: PayloadAction<"name" | "username" | "email" | "phone">
    ) {
      if (state.sortBy === action.payload) {
        state.direction = state.direction === "asc" ? "desc" : "asc";
      } else {
        state.sortBy = action.payload;
        state.direction = "asc";
      }
    },
  },
});

export const { setSortColumn } = sortSlice.actions;
export default sortSlice.reducer;
