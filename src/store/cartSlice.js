import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [
      {
        productId: 1,
        quantity: 1,
        product: {
          id: 1,
          title: "Blue t-shirt",
          price: 25.99,
          image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        }
      },
    ],
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.items.push({
        productId: action.payload.id,
        quantity: 1,
        product: action.payload
      });
    },
  },
});

export const { addItemToCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
