import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTheme: "dark",
  showSplash: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === "dark" ? "light" : "dark";
    },
    setShowSplash: (state, action) => {
     
      state.showSplash = action.payload;
    },
  },
});

export const { toggleTheme, setShowSplash } = themeSlice.actions;

export default themeSlice.reducer;
