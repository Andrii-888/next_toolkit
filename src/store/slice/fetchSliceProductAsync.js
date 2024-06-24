import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:8000/api/products`);

      if (!response.ok) {
        const data = await response.json();
        return rejectWithValue({ ...data.message, status: false });
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const fetchProductById = createAsyncThunk(
  "products/fetchProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:8000/api/products/${id}`);
      if (!response.ok) {
        const data = await response.json();
        return rejectWithValue({ ...data.message, status: false });
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export { fetchProducts, fetchProductById };
