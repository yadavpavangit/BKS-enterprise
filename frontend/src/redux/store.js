import { configureStore } from "@reduxjs/toolkit";
import addToCardReducer from "./features/addtoCard.slice.js";

const store = configureStore({
  reducer: {
    card: addToCardReducer,
  },
});

export default store;
