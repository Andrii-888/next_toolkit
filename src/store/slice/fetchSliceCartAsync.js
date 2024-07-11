import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchCart = createAsyncThunk(
  "carts/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:8000/api/carts/cart`);
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

const fetchRemoveFromCart = createAsyncThunk(
  "cart/removeFromeCart",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/carts/remove-from-cart`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: id,
        }
      );
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

const fetchDeleteCart = createAsyncThunk(
  "carts/fetchDeleteCart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:8000/api/clear-cart`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const data = await response.json();
        return rejectWithValue({ ...data.message, statuse: false });
      }
      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const fetchAddToCart = createAsyncThunk(
  "carts/fetchDeleteCart",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/carts/add-to-cart`,
        {
          method: "POST",
          credentials: "include", // включает куки
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const data = await response.json();
        return rejectWithValue({ ...data.message, statuse: false });
      }
      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { fetchCart, fetchRemoveFromCart, fetchDeleteCart, fetchAddToCart };
