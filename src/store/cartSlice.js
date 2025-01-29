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
      // Find if the item already exists in the cart by matching the productId
      const existingItem = state.items.find(item => item.productId === action.payload.id);
      
      // If the item exists, increment its quantity
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        // If the item does not exist, add it to the cart with quantity 1
        state.items.push({
          productId: action.payload.id,
          quantity: 1,
          product: action.payload
        });
      }
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter(item => item.productId !== action.payload);
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
