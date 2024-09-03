import { RootState } from "../store";

export const selectAllUsers = (state: RootState) => state.users.users;
export const selectUserStatus = (state: RootState) => state.users.status;
