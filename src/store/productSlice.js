import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: 'product',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action) {
      state.items = action.payload;
      state.loading = false;
    },
    fetchProductsFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  }
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productSlice.actions;

export const fetchProducts = () => async dispatch => {  
  dispatch(fetchProductsStart());
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
}

export default productSlice.reducer;