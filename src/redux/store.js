import { configureStore } from "@reduxjs/toolkit";
import lockSlice from "./lockSlice";

const store = configureStore({
  reducer: {
    lock: lockSlice,
  },
});

export default store;
