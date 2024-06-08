import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        const data = await response.json();
        return rejectWithValue({ ...data.message, status: false });
      }

      const data = await response.json();
      console.log(data, 3333);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { fetchProduct };
