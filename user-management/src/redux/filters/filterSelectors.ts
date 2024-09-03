import { RootState } from "../store";

export const selectNameFilter = (state: RootState) => state.filters.name;
export const selectUsernameFilter = (state: RootState) =>
  state.filters.username;
export const selectEmailFilter = (state: RootState) => state.filters.email;
export const selectPhoneFilter = (state: RootState) => state.filters.phone;
