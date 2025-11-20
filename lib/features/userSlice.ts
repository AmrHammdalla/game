import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { User } from "@/types/user";

export type UserState = User | null;

export const userInitialState: UserState = null;

export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState as UserState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return action.payload;
    },
    clearUser: (state) => {
      state = userInitialState;
      return state;
    },
  },
});

export const selectUser = (state: RootState) => state.user;

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
