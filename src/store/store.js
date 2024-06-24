import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slice/themeSlice";
import sessionSliceReducer from "./slice/sessionSliceReducer";
import { createLogger } from "redux-logger";
import productsSliceReducer from "./slice/productsSliceReducer";

// Create logger middleware
const logger = createLogger({
  collapsed: true,
  // Optional options, if you want to customize the logger output
});

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    session: sessionSliceReducer,
    products: productsSliceReducer,
  },
  // Adding the logger middleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

