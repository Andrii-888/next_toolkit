import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "./fetchSliceProductAsync";

const productsSliceReducer = createSlice({
  name: "products",
  initialState: {
    products: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.reduce((acc, current) => {
        acc[current.id] = current;
        return acc;
      }, {});
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default productsSliceReducer.reducer;
