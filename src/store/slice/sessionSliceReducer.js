import { createSlice } from "@reduxjs/toolkit";
import { fetchLogin, fetchSignup } from "./fetchSliceSessionAsync";

const sessionSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSignup.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchSignup.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(fetchSignup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default sessionSlice.reducer;
