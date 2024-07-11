import { createSlice } from "@reduxjs/toolkit";
import { fetchProductById, fetchProducts } from "./fetchSliceProductAsync";
import { fetchAddToCart } from "./fetchSliceCartAsync";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: {},
    product: {},
    loading: true,
    error: null,
    favorites: [],
    cart: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      state.products = {
        ...state.products,
        [action.payload]: {
          ...state.products[action.payload],
          isFavorite: !state.products[action.payload].isFavorite,
        },
      };
      const index = state.favorites.findIndex(
        (item) => item._id === action.payload
      );
      if (index >= 0) {
        state.favorites = state.favorites.filter(
          (item) => item._id !== action.payload
        );
      } else {
        state.favorites = [...state.favorites, state.products[action.payload]];
      }
    },
    addToCart: (state, action) => {
      const index = state.cart.findIndex((item) => item._id === action.payload);

      if (index >= 0) {
        state.cart = state.cart.map((item) => {
          if (item._id === action.payload) {
            item.count += 1;
          }
          return item;
        });
      } else {
        const product = { ...state.products[action.payload], count: 1 };
        state.cart = [...state.cart, product];
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    updateQuantity: (state, action) => {
      const { id, count } = action.payload;
      const item = state.cart.find((item) => item._id === id);
      if (item) {
        item.count = count;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      const products = action.payload.reduce((acc, current) => {
        acc[current._id] = current;
        return acc;
      }, {});
      state.products = products;
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
    builder.addCase(fetchAddToCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchAddToCart.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.cart = action.payload.carts;
    });
    builder.addCase(fetchAddToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {
  toggleFavorite,
  addToCart,
  removeFromCart,
  clearCart,
  updateQuantity,
} = productsSlice.actions;
export default productsSlice.reducer;
