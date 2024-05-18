import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

// export const store = () => {
//   return configureStore({
//     reducer: {},
//   });
// };
