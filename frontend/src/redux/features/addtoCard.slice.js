import { createSlice } from "@reduxjs/toolkit";

const addToCardSlice = createSlice({
  name: "addToCard",
  initialState: {
    products: [],
  },
  reducers: {
    addToCard: (state, action) => {
      state.products.push(action.payload);
    },
    removeFromCard: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      );
    },
    clearCard: (state) => {
      state.products = [];
    },
  },
});

export default addToCardSlice.reducer;
export const { addToCard, removeFromCard, clearCard } = addToCardSlice.actions;
