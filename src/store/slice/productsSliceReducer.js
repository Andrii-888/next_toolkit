// import { createSlice } from "@reduxjs/toolkit";
// import { fetchProductById, fetchProducts } from "./fetchSliceProductAsync";

// const productsSliceReducer = createSlice({
//   name: "products",
//   initialState: {
//     products: {},
//     product: {},
//     loading: true,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchProducts.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(fetchProducts.fulfilled, (state, action) => {
//       state.loading = false;
//       state.products = action.payload.reduce((acc, current) => {
//         acc[current._id] = current;
//         return acc;
//       }, {});
//     });
//     builder.addCase(fetchProducts.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     });
//     builder.addCase(fetchProductById.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(fetchProductById.fulfilled, (state, action) => {
//       state.loading = false;
//       state.product = action.payload;
//     });
//     builder.addCase(fetchProductById.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     });
//   },
// });

// export default productsSliceReducer.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { fetchProductById, fetchProducts } from "./fetchSliceProductAsync";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: {},
    product: {},
    loading: true,
    error: null,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const product = state.products[action.payload];
     
      // let favorite = JSON.parse(localStorage.getItem("favorite")) || [];

     
      // const index = favorite.indexOf(action.payload);
      // if (index === -1) {
       
      //   favorite.push(action.payload);
      // } else {
       
      //   favorite.splice(index, 1);
      // }

      if (product) {
        product.isFavorite = !product.isFavorite;
      }

      // localStorage.setItem("favorite", JSON.stringify(favorite));

      state.products[action.payload] = product;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      const favorite = JSON.parse(localStorage.getItem("favorite"));
      state.products = action.payload.reduce((acc, current) => {
        acc[current._id] = current;
        if (favorite.includes(current._id)) {
          acc[current._id].isFavorite = true;
        } else {
          acc[current._id].isFavorite = false;
        }
        return acc;
      }, {});
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchProductById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { toggleFavorite } = productsSlice.actions;
export default productsSlice.reducer;
