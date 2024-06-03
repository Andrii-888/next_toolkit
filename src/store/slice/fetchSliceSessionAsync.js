import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchSignup = createAsyncThunk(
  "session/fetchSignup",
  async (formdata, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8000/api/session/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

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

const fetchLogin = createAsyncThunk(
  "session/fetchLogin",
  async (formdata, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8000/api/session/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      if (!response.ok) {
        const data = await response.json();
        return rejectWithValue(data.message);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { fetchSignup, fetchLogin };
