import { createSlice } from "@reduxjs/toolkit";

const lockSlice = createSlice({
  name: "lock",
  initialState: {
    isUnlocked: false,
  },
  reducers: {
    toggleLock: (state) => {
      state.isUnlocked = !state.isUnlocked;
    },
  },
});
export default lockSlice.reducer;
export const { toggleLock } = lockSlice.actions;
